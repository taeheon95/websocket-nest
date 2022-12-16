import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets/decorators';
import {} from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(5000)
export class WsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleMessage(client: any, payload: any): string {
    console.log(payload);
    return 'Hello world!';
  }
}
