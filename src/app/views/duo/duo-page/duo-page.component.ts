import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmLogoutComponent } from 'src/app/components/modals/confirm-logout/confirm-logout.component';
import { IDuo } from 'src/app/models/duo.model';
import { IUser } from 'src/app/models/user.model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { DuoService } from 'src/app/services/duo.service';

export interface IMsg {
  id: string;
  nickname: string;
  lastMessage: string;
  unreadMessage: number;
  icon: string;
}

export interface IDuoUser {
  id: string
  userId: string
  icon: string
  nickname: string
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
  public duos: IDuoUser[] = [];
  public user!: IUser;
  public isLoading = false;

  constructor(
    private router: Router, 
    public dialog: MatDialog,
    private duoService: DuoService,
    private authService: AuthService,
    private alertService: AlertService,
  ) {
    this.setUser();
  }

  ngOnInit(): void {
    this.getDuos();
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.user = user;

    this.authService.getUser().subscribe(res => this.user = res);
  }

  getDuos() {
    this.isLoading = true;

    this.duoService.getDuos(this.user.id as string).subscribe({
      next: (res) => {
        this.isLoading = false;

        this.duos = res.map(r => {
          const duoUser = r.users.find(u => u.id != this.user.id)
          const duo: IDuoUser = {
            id: r.id as string,
            userId: duoUser?.id as string,
            icon: duoUser?.icon as string,
            nickname: duoUser?.nickname as string,
          }

          return duo;
        });
      },
       error: () => {
        this.isLoading = false;
       }
    });
  }

  showPrivateChat(id: string) {
    this.router.navigateByUrl('/private-chat/' + id, { state: { hello: 'world' } });
  }

  undoDuo(duo: IDuoUser) {
    const dialogRef = this.dialog.open(ConfirmLogoutComponent, {
      data: {
        msg: 'Deseja realmente desfazer dupla com ' + duo.nickname + '?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading = true;

        this.duoService.deleteDuo(duo.id).subscribe({
          next: () => {
            this.duos = this.duos.filter((m) => m.id != duo.id);
            this.alertService.success('A dupla foi desfeita.');
            this.isLoading = false;
          }, error: () => {
            this.isLoading = false;
          }
        })
      }
    });
  }

  searchDuo() {
    this.router.navigateByUrl('search');
  }

  goToSearchPage() {
    this.router.navigateByUrl('search')
  }
}
