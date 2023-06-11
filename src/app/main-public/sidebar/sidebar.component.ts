import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmLogoutComponent } from 'src/app/components/modals/confirm-logout/confirm-logout.component';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Socket } from 'ngx-socket-io';
import { INotification } from 'src/app/models/notification.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public user!: IUser;
  public notificationsUnseen$ = this.notificationService.notifications$.pipe(map(n => n.filter(n => n.seen != true)));
  public notificaitonsLength = 0;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.setUser();
  }

  ngOnInit(): void {
    this.getNotifications();
    this.watchNotifications();
  }

  watchNotifications() {
    this.notificationsUnseen$.subscribe((res) => {
      console.log(res)

      this.notificaitonsLength = res.length;
    });
  }

  getNotifications() {
    this.notificationService.getNotifications();
  }

  logout() {
    const dialogRef = this.dialog.open(ConfirmLogoutComponent, {
      data: {
        msg: 'Deseja realmente deslogar?',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
      }
    });
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.user = user;

    this.authService.getUser().subscribe(res => this.user = res);
  }

}
