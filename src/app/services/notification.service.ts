import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { AuthService } from './auth.service';
import { Socket } from 'ngx-socket-io';
import { INotification } from '../models/notification.model';
import { AlertService } from './alert.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public user!: IUser;
  public notifications$ = this.socket.fromEvent<INotification[]>('notifications');
  public getNotifications$ = this.socket.fromEvent('get notifications');

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private socket: Socket,
    private utilService: UtilService
  ) { 
    this.setUser();
    this.watchGetNotifications();
    this.watchNotificationDeclined();
    this.watchNotificationsSended();
  }

  watchGetNotifications() {
    this.getNotifications$.subscribe(() => {
      this.getNotifications();
    })
  }

  watchNotificationDeclined() {
    this.socket.fromEvent('notification declined').subscribe(() => {
      this.alertService.warning('Seu convite foi recusado e não pode ser enviado novamente.');
    })
  }

  watchNotificationsSended() {
    this.socket.fromEvent('notification sended').subscribe(() => {
      this.alertService.success('Convite para dupla enviado com sucesso!');
    })
  }

  sendNotification(message: string, reciverId: string, type: 'INVITE' | 'NOTICE') {
    const notification: INotification = {
      id: this.utilService.generateId(),
      message,
      reciverId,
      senderIcon: this.user.icon as string,
      senderId: this.user.id as string,
      senderNickname: this.user.nickname,
      type
    }

    this.socket.emit('notifications', { notification, user: this.user });
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.user = user;

    this.authService.getUser().subscribe(res => this.user = res);
  }

  getNotifications() {
    if (this.user.nickname == 'juzt')
      console.log(this.user.id)

    this.socket.emit('get notifications', this.user.id);
  }

  setNotificationsAsSeen() {
    this.socket.emit('set notifications as seen', this.user);
  }

  acceptInvite(notification: INotification) {
    const notificationAccepted: INotification = {
      id: this.utilService.generateId(),
      message: 'Aceitou seu convite para dupla',
      reciverId: notification.senderId,
      senderIcon: this.user.icon as string,
      senderId: this.user.id as string,
      senderNickname: this.user.nickname,
      type: 'NOTICE'
    };

    this.socket.emit('notifications', { notification: notificationAccepted, user: this.user });
    this.socket.emit('accept invite notification', notification.id);
    
    this.alertService.success('Dupla feita com sucesso!');
  }

  denyInvite(idNotification: string) {
    this.socket.emit('deny invite notification', idNotification);
    
    this.alertService.success('Convite para dupla foi recusado.');
  }
}
