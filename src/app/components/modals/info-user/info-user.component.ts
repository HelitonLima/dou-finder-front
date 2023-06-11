import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  @Output() close: EventEmitter<null> = new EventEmitter();

  @Input() userPost!: IUser;

  public userLogged!: IUser;

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService
  ) {
    this.setUser();
  }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit();
  }

  invite() {
    const msg = 'Deseja ser sua dupla!!';
    const reciverId = this.userPost.id as string;

    this.notificationService.sendNotification(msg, reciverId, 'INVITE');

    this.close.emit();
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.userLogged = user;

    this.authService.getUser().subscribe(res => this.userLogged = res);
  }

}
