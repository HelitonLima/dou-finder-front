import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmLogoutComponent } from 'src/app/components/modals/confirm-logout/confirm-logout.component';

export interface IMsg {
  id: string;
  nickname: string;
  lastMessage: string;
  unreadMessage: number;
  icon: string;
}
@Component({
  selector: 'app-duo-page',
  templateUrl: './duo-page.component.html',
  styleUrls: ['./duo-page.component.scss'],
})
export class DuoPageComponent implements OnInit {
  public messages: IMsg[] = [
    {
      id: 'abc',
      nickname: 'Pixer',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 2,
      icon: '2015_Master_Poro'
    },
    {
      id: 'abcd',
      nickname: 'Juzt',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 4,
      icon: '2015_Poro'
    },
    {
      id: 'abcde',
      nickname: 'Bubble',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 0,
      icon: '2016_Master_Poro'
    },
    {
      id: 'abcdef',
      nickname: 'Bloodreina',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 2,
      icon: '2016_Poro'
    },
  ];

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  showPrivateChat() {
    this.router.navigateByUrl('/private-chat/1', { state: { hello: 'world' } });
  }

  undoDuo(message: IMsg) {
    const dialogRef = this.dialog.open(ConfirmLogoutComponent, {
      data: {
        msg: 'Deseja realmente desfazer dupla com ' + message.nickname + '?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.messages = this.messages.filter((m) => m.id != message.id);
      }
    });
  }

  searchDuo() {
    this.router.navigateByUrl('search');
  }
}
