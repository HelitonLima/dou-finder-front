import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { Socket } from 'ngx-socket-io';
import { UtilService } from './util.service';
import { IChat, IChatMessage } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public user!: IUser;
  public chat$ = this.socket.fromEvent<IChat>('chat');
  public getChat$ = this.socket.fromEvent<string[]>('get chat');

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private socket: Socket,
    private utilService: UtilService
  ) { 
    this.setUser();
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.user = user;

    this.authService.getUser().subscribe(res => this.user = res);
  }

  getChat(users: string[]) {
    this.socket.emit('get chat', users);
  }

  createChat(users: string[]) {
    this.socket.emit('create chat', users);
  }

  sendMsg(msg: IChatMessage) {
    this.socket.emit('send msg', msg);
  }

}
