import 'reflect-metadata';
import http from 'node:http';
import { container } from 'tsyringe';

import { app } from './app';
import { SocketServer } from './socket';

const server = http.createServer(app);

const socketServer = container.resolve(SocketServer);

socketServer.execute(server);

server.listen(process.env.API_PORT || 3333, () => {
  console.log(`Server started on port ${process.env.API_PORT || 3333}`);
});
