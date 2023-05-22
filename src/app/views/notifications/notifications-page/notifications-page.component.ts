import { Component, OnInit } from '@angular/core';

export interface INotification {
  id: string,
  icon: string,
  nickname: string,
  message: string,
  type: 'INVITE' | 'NOTICE'
}

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {

  public notifications: INotification[] = [
    {
      icon: '2015_Master_Poro',
      id: '123',
      nickname: 'Pixer',
      message: 'Aceitou seu convite!!!',
      type: 'NOTICE'
    },
    {
      icon: '2016_Master_Poro',
      id: '1232',
      nickname: 'Juzt',
      message: 'deseja fazer dupla com você!!!',
      type: 'INVITE'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
