import json
import pymysql.cursors
import requests
from tqdm import tqdm
import time


data = json.load(open('collections.json', 'r', encoding="utf-8"))

db = pymysql.connect(host="thecodeblog.net", port=3306, database="thecodeb_iconify", user="thecodeb_root", password="redaxe3636", charset="utf8")

with db:
    cursor = db.cursor()

    def addIconSet():
        sql = "INSERT INTO icon_set (name, icon_count, prefix, author, license, category, height, url, license_url) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        icon_set_data = [tuple([
            k["name"],
            k["total"],
            k["prefix"],
            k["author"]["name"],
            k["license"]["title"],
            k["category"],
            (",".join(list(map(str, k["height"]))) if isinstance(k["height"], list) else str(k["height"])) if "height" in k else None,
            k["author"]["url"],
            k["license"]["url"],
        ]) for i, v in data.items() for j, k in v.items()]

        cursor.executemany(sql, icon_set_data)
        db.commit()
    
    cursor.execute("SELECT prefix from icon_set")
    prefixes = [i[0] for i in cursor.fetchall()]

    #TODO: GOOGLE MATERIAL ICONS DOES NOT HAVE THEMES ADDED YET
    for i in prefixes:
        #fetch raw data and id of corresponding icon set in database
        data = json.loads(requests.get(f"https://icon-sets.iconify.design/assets/collection.{i}.js").text[:-2].split("=", 1)[-1])
        setvarsql = "SELECT id FROM icon_set WHERE prefix=%s into @icon_set"
        cursor.execute(setvarsql, i)

        #add a few more metadata to icon_set table
        def updateIconSetMeta():
            sql = "UPDATE icon_set SET has_theme_prefixes = %s, has_theme_suffixes = %s, has_tags = %s WHERE id=@icon_set"
            cursor.execute(sql, ('themePrefixes' in data, 'themeSuffixes' in data, 'tags' in data))
            db.commit()
        
        #insert relationship between icons and tags
        def insertIconsTagsRelationship():
            sql = "INSERT INTO icon_tags (icon_id, tag_id) VALUES ((SELECT id FROM icons WHERE name=%s AND icon_set=@icon_set LIMIT 1), (SELECT id FROM tags WHERE name=%s AND icon_set=@icon_set LIMIT 1))"
            for icon in tqdm(data['icons'], desc="Dumping tags for icons from " + data['name']):
                for tag in icon["tags"]:
                    cursor.execute(sql, (icon['name'], tag))
            db.commit()

        #insert tags
        def insertTags():
            tags = list(set(sum([i['tags'] for i in data['icons']], [])))
            sql = "INSERT INTO tags (name, icon_set) VALUES (%s, @icon_set)"
            for tag in tqdm(tags, desc="Dumping icon tags from " + data['name']):
                cursor.execute(sql, tag)
            db.commit()

        #insert icons
        def insertIcons():
            sql = "INSERT INTO icons (icon_set, name) VALUES (@icon_set, %s)"
            icons = [(icon['name'] if isinstance(icon, dict) else icon, ) for icon in data["icons"]]
            for icon in tqdm(icons, desc="Dumping icons from " + data['name']):
                cursor.execute(sql, icon)
            db.commit()

        #fetch icons
        def fetchIcons():
            sql = "SELECT icons.name FROM icons INNER JOIN icon_set WHERE icon_set.prefix='mdi' LIMIT 30"
            cursor.execute(sql)
            print(cursor.fetchall())

        #fetch icon with tag filter
        def filterIconsWithTag():
            sql = """
                SELECT icons.name 
                FROM icons 
                INNER JOIN icon_tags 
                ON icons.id = icon_tags.icon_id 
                AND icon_tags.tag_id = (
                    SELECT id 
                    FROM tags 
                    WHERE icon_set = (
                        SELECT id 
                        FROM icon_set 
                        WHERE name='Unicons' 
                        LIMIT 1
                    )
                    AND name='Design Tools'
                ) 
                LIMIT 100
            """
            cursor.execute(sql)
            print(cursor.fetchall())

        sql = "SELECT has_tags, has_theme_prefixes, has_theme_suffixes FROM icon_set WHERE id = @icon_set"
        cursor.execute(sql)
        has_tags, has_theme_prefixes, has_theme_suffixes = cursor.fetchone()

        def insertAllIcons():
            if has_tags:
                insertTags()
                insertIconsTagsRelationship()

        def insertSampleIcons():
            sql = "INSERT INTO sample_icon (icon, icon_set) VALUES((SELECT id FROM icons WHERE icon_set = @icon_set AND name = %s), @icon_set)"

            samples = data['info']['samples']

            for index, icon in enumerate(samples):
                found = False
                if icon in data['icons']:
                    continue
                for i in data['icons']:
                    if isinstance(i, dict):
                        if i['name'] == icon: 
                            found = True
                            break
                        if 'aliases' in i:
                            if icon in i['aliases']:
                                samples[index] = i['name']
                                found = True
                    
                if not found:
                    samples[index] = "-".join(icon.split("-")[1:])

            cursor.executemany(sql, samples)
            db.commit()
            print(data['name'])

        insertSampleIcons()