import { ISocketEmitDTO } from '../dtos/ISocketEmitDTO';
import { ISocketProvider } from '../models/ISocketProvider';

class MockSocketProvider implements ISocketProvider {
  private messages: string[] = [];

  start() {
    console.log('Server started');
  }

  emit({message}: ISocketEmitDTO): boolean {
    this.messages.push(message);
    return true;
  }

  emitAll(message: string): void {
    this.messages.push(message);
  }
}

export { MockSocketProvider };