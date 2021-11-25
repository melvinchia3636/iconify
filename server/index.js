const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors({
    origin: '*'
}));
const port = 3001;

const db = mysql.createConnection({
    host: 'thecodeblog.net',
    user: 'thecodeb_root',
    password: 'redaxe3636',
    database: 'thecodeb_iconify'
    })

db.connect()

app.get('/fetch-iconsets', (req, res) => {
    db.query(`
        SELECT name, icon_count, prefix, height, sample_icon, author, url, license, license_url, category
        FROM icon_set
        INNER JOIN (
            SELECT sample_icon.icon_set, GROUP_CONCAT(icons.name) 
            AS "sample_icon" 
            FROM sample_icon 
            INNER JOIN icons 
            ON icons.id = sample_icon.icon 
            GROUP BY sample_icon.icon_set
        ) AS sample_icon
        ON sample_icon.icon_set = icon_set.id
        `, 
        function (err, rows) {
            if (err) throw err

            const items = {}

            for (const item of rows) {
                if (items[item.category]) {
                    items[item.category].push(item)
                } else {
                    items[item.category] = [item]
                }
                item.category = undefined
            }
        
            db.query("SELECT COUNT(*) as count FROM icons", function(err, [count]) {
                res.send({icon_sets: items, ...count})
            })
        }
    )
});

app.get('/fetch-iconlist/:icon_set/:page', (req, res) => {
    const {icon_set, page} = req.params
    const {tag, q} = req.query
    db.query(`
        SELECT icons.name
        FROM icons
        ${tag ? `
            INNER JOIN icon_tags
            ON icons.id = icon_tags.icon_id
        ` : ""}
        WHERE icons.icon_set = (
            SELECT id 
            FROM icon_set 
            WHERE prefix="${icon_set}"
            LIMIT 1
        ) ${tag ? `
            AND icon_tags.tag_id = (
                SELECT id 
                FROM tags 
                WHERE icon_set = (
                    SELECT id 
                    FROM icon_set 
                    WHERE prefix="${icon_set}"
                    LIMIT 1
                )
            AND name='${tag}'
        )` : ""} ${q ? `
            AND icons.name LIKE '%${q}%'
        ` : ""}
        LIMIT 60 
        OFFSET ${(page-1)*60}
    `, 
    function (err, icons) {
        if (err) throw err

        db.query(`SELECT version, name, icon_count, category FROM icon_set WHERE prefix="${icon_set}"`, function (err, [version, name, icon_count, category]) {
            if (err) throw err

            db.query(`SELECT name FROM tags WHERE icon_set = (SELECT id FROM icon_set WHERE prefix="${req.params.icon_set}")`, function (err, rows) {
                if (err) throw err

                res.send({icons, ...version, ...name, ...icon_count, ...category, tags: rows.map(e => e.name), hasMore: icons.length === 60})
            })
        })
    })
})

app.get("/search-icons", function (req, res) {
    const { q, page, icon_set } = req.query

    db.query(`
        SELECT DISTINCT icon_set.name, icon_set.prefix, icon_set.category
        FROM icons
        INNER JOIN icon_set 
        ON icons.icon_set = icon_set.id 
        WHERE icons.name 
        LIKE '%${q}%'
        `, 
        function (err, icon_sets) {
            if (err) throw err
            
            db.query(`
                SELECT icons.name, icon_set.prefix as icon_set, icon_set.category
                FROM icons
                INNER JOIN icon_set 
                ON icons.icon_set = icon_set.id 
                WHERE icons.name 
                LIKE '%${q}%'
                ${icon_set ? `
                    AND icon_set.prefix = "${icon_set}"
                ` : ""}
                LIMIT 60 
                OFFSET ${((page || 1)-1)*60}
                `, 
                function (err, icons) {
                    if (err) throw err

                    res.send({icon_sets, icons, hasMore: icons.length === 60})
                }
            )
        }
    )
})

app.listen(port);