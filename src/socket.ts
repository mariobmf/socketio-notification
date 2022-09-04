import { inject, injectable } from 'tsyringe';
import { Server } from 'http';
import { ISocketProvider } from './container/providers/SocketProvider/models/ISocketProvider';

@injectable()
export class SocketServer {
  constructor(
    @inject('SocketProvider')
    private socketProvider: ISocketProvider,
  ) {}

  execute(server: Server): void {
    this.socketProvider.start(server);
  }
}