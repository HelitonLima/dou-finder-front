import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-duo-user',
  templateUrl: './duo-user.component.html',
  styleUrls: ['./duo-user.component.scss']
})
export class DuoUserComponent implements OnInit {

  @Input() model!: IUser;

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  invite() {
    const msg = 'Deseja ser sua dupla!!';
    const reciverId = this.model.id as string;

    this.notificationService.sendNotification(msg, reciverId, 'INVITE');
  }

}
