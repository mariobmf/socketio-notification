
# Envio de notificação em tempo real

Serviço para realizar o envio de notificação para usuários conectados através do protocolo de comunicação WebSocket.

Foi criado uma API com ExpressJs para testar o envio da notificação, mas o serviço pode ser facilmente implementado em um sistema de filas.

## Referência

 - [Socket.io](https://socket.io)
 - [TSyringe](https://github.com/microsoft/tsyringe)
 
## Como executar

Para executar o projeto sem Docker:

```bash
  # yarn
  # yarn dev:server
```
OU
```bash
  # npm install
  # npm run dev:server
```
Para executar com Docker:
```bash
  # docker compose up
```


## Documentação da API

#### Endereço do servidor em ambiente de desenvolvimento
```http
  http://localhost:3333
```

#### Envia uma notificação para um usuário especifico

```http
  POST /send-notification-to-user
```

Request Body (JSON)
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `user_id` | `string` | **Obrigatório**. ID do usuário que recebera a notificação |
| `message` | `string` | **Obrigatório**. Texto da notificação |

#### Envia uma notificação para todos usuários conectados

```http
  POST /send-notification-all-users
```

Request Body (JSON)
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `message` | `string` | **Obrigatório**. Texto da notificação |


## Documentação do WebSocket

#### Endereço de conexão

```http
  http://localhost:3333
```

#### O cliente deve ouvir o evento `notifications`
