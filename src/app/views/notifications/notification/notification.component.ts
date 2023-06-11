import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INotification } from 'src/app/models/notification.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() model!: INotification;
  
  @Output() handleNotificationEmitter: EventEmitter<null> = new EventEmitter();

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  showActionButton() {
    return this.model.type == 'INVITE' && this.model.accpeted != true;
  }

  showAccepted() {
    return this.model.type == 'NOTICE' || (this.model.type == 'INVITE' && this.model.accpeted == true);
  }

  denyInvite() {
    
  }

  acceptInvite() {
    this.notificationService.acceptInvite(this.model);
  }
}
