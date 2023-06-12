import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IDuo } from 'src/app/models/duo.model';
import { INotification } from 'src/app/models/notification.model';
import { IUser } from 'src/app/models/user.model';
import { DuoService } from 'src/app/services/duo.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() model!: INotification;
  @Input() user!: IUser;
  
  @Output() handleNotificationEmitter: EventEmitter<null> = new EventEmitter();

  constructor(
    private notificationService: NotificationService,
    private duoService: DuoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  showActionButton() {
    return this.model.type == 'INVITE' && this.model.accpeted != true && this.model.declined != true;
  }

  showAccepted() {
    return this.model.type == 'NOTICE' || (this.model.type == 'INVITE' && this.model.accpeted == true);
  }

  showDeclined() {
    return this.model.type == 'INVITE' && this.model.declined == true;
  }

  showPrivateChat() {
    this.router.navigateByUrl('/private-chat/' + this.model.senderId, { state: { hello: 'world' } });
  }

  denyInvite() {
    this.notificationService.denyInvite(this.model.id);
  }

  acceptInvite() {
    const duo: IDuo = {
      users: [
        {
          id: this.model.senderId,
          icon: this.model.senderIcon,
          nickname: this.model.senderNickname
        },
        {
          id: this.user.id as string,
          icon: this.user.icon as string,
          nickname: this.user.nickname
        }
      ],
      usersId: [
        this.model.senderId,
        this.user.id as string,
      ]
    }

    this.duoService.createDuo(duo).subscribe({
      next: (res: IDuo) => {
        this.notificationService.acceptInvite(this.model);
      }
    })
  }
}
