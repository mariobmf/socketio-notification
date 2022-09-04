import { container } from 'tsyringe';
import { SocketIoProvider } from './implementations/SocketIoProvider';
import { ISocketProvider } from './models/ISocketProvider';

container.registerSingleton<ISocketProvider>('SocketProvider', SocketIoProvider);