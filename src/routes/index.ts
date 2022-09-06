import { Router } from 'express';
import { container } from 'tsyringe';
import SendNotificationAllUsersService from '../services/SendNotificationAllUsersService';
import SendNotificationToUserService from '../services/SendNotificationToUserService';

const routes = Router();

routes.post('/send-notification-to-user', (req, res) => {
  const { user_id, message } = req.body;

  const sendNotification = container.resolve(SendNotificationToUserService);

  sendNotification.execute({
    user_id,
    message,
  });

  res.status(200).send('Notificação enviada com sucesso!');
});

routes.post('/send-notification-all-users', (req, res) => {
  const { message } = req.body;

  const sendNotification = container.resolve(SendNotificationAllUsersService);

  sendNotification.execute(message);

  res.status(200).send('Notificação enviada com sucesso!');
});

export { routes };
