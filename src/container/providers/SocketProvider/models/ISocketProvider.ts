import { Server } from 'http';
import { ISocketEmitDTO } from '../dtos/ISocketEmitDTO';

export interface ISocketProvider {
  start: (server: Server) => void;
  emit: (data: ISocketEmitDTO) => boolean;
  emitAll: (message: string) => void;
}