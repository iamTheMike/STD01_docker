const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

let db = null;

const initMysql = async () => {
    db = await mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'std01'
    });
};

app.get('/hello-world', (req, res) => {
    res.send('Hello world');
});

app.get('/users', async (req, res) => {
    try {
        const [result] = await db.execute('SELECT * FROM users');  // แก้ไขจาก excute เป็น execute
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database query failed');
    }
});

app.listen(8000, async () => {
    await initMysql();
    console.log('Server running on port 8000');
});