import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INotification } from '../notifications-page/notifications-page.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() model: INotification = {
    id: '',
    icon: '',
    message: '',
    nickname: ''
  };
  
  @Output() handleNotificationEmitter: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
