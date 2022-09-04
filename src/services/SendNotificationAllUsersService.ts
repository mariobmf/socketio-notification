import { inject, injectable } from "tsyringe";
import { ISocketProvider } from "../container/providers/SocketProvider/models/ISocketProvider";

@injectable()
export default class SendNotificationAllUsersService {
  constructor(
    @inject('SocketProvider')
    private socketProvider: ISocketProvider,
  ) {}

  public execute(message: string): void {
    this.socketProvider.emitAll(message);
  }
}