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

app.get('/fetch-iconsets', async (req, res) => {
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
        
            res.send(req.query.nobulk ? rows : items)
        }
    )
});

app.listen(port);
