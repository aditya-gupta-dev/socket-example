import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { utils } from './utils.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile('H:/Javascript/socket/index.html')
});

io.on('connection', (socket) => { 
    console.log(socket.client.request.headers['user-agent']);
});

server.listen(utils.port, () => {
    console.log(`Running at -> http://localhost:${utils.port}...`);
});


