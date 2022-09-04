import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

import { ISocketEmitDTO } from '../dtos/ISocketEmitDTO';
import { ISocketProvider } from '../models/ISocketProvider';

type IConnectedUser = {
  [key: string]: string;
};

class SocketIoProvider implements ISocketProvider {
  private io: Server;

  private connectedUsers: IConnectedUser = {};

  start(server: HttpServer) {
    this.io = new Server(server);
    this.io.on('connection', socket => {
      console.log(`User connected: ID ${socket.id}`);

      const user_id = socket.handshake.query.user_id as string;
      if (user_id) this.connectedUsers[user_id] = socket.id;
    });
  }

  emit({ message, user_id }: ISocketEmitDTO): boolean {
    const userSocket = this.connectedUsers[user_id];
    if (!userSocket) return false;

    this.io.to(userSocket).emit('notifications', message);
    return true;
  }

  emitAll(message: string): void {
    this.io.emit('notifications', message);
  }
}

export { SocketIoProvider };