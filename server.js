import express from 'express';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import Character from './character' // モデルをimport

const app = express();
const port = 3001;
const dbUrl = 'mongodb://localhost/crud'; // dbの名前をcrudに指定

// body-parserを適用
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.connect(dbUrl, dbErr => {
    if (dbErr) throw new Error(dbErr);
    else console.log('db connected');

    // POSTリクエストに対処
    app.post('/api/characters', (request, response) => {
        const { name, age } = request.body; // 送られてきた名前と年齢を取得

        new Character({
            name,
            age,
        }).save(err => {
            if (err) response.status(500);
            else response.status(200).send('${name}(${age}) was successfully created.')
        });
    });
    // MongoDBに接続してからサーバーを立てるために
    // app.listen()をmongoose.connect()の中に移動
    app.listen(port, err => { // http://localhost:3001にサーバーがたつ
        if (err) throw new Error(err);
        else console.log('listening on port ${port}');
    });
});
