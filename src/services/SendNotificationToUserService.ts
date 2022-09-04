import { inject, injectable } from "tsyringe";
import { ISocketProvider } from "../container/providers/SocketProvider/models/ISocketProvider";

interface IRequeste {
  user_id: string;
  message: string;
}

@injectable()
export default class SendNotificationToUserService {
  constructor(
    @inject('SocketProvider')
    private socketProvider: ISocketProvider,
  ) {}

  public execute({ message, user_id }: IRequeste): void {
    this.socketProvider.emit({
      user_id,
      message,
    });
  }
}