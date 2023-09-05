import express from 'express';
import http from 'http';
import { utils } from './utils.js';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    console.log(req.headers['user-agent'])
    res.send('hello')
});

server.listen(utils.port, () => {
    console.log(`Running at -> http://localhost:${utils.port}...`);
});



