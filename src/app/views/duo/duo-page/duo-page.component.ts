import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duo-page',
  templateUrl: './duo-page.component.html',
  styleUrls: ['./duo-page.component.scss']
})
export class DuoPageComponent implements OnInit {

  public messages = [
    {
      nickname: 'Pixer',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 2
    },
    {
      nickname: 'Juzt',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 4
    },
    {
      nickname: 'Bubble',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 0
    },
    {
      nickname: 'Bloodreina',
      lastMessage: 'Última menssagem recebida...',
      unreadMessage: 2
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showPrivateChat() {
    this.router.navigateByUrl('/private-chat/1', { state: { hello: 'world' } });
  }

}
