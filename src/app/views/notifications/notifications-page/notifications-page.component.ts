import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/models/user.model';
import { INotification } from 'src/app/models/notification.model';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {

  public user!: IUser;
  public notifications$ = this.notificationService.notifications$;
  public notificaitonsLength = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
    ) {
      this.setUser();
    }

  ngOnInit(): void {
    this.setNotificationsAsSeen();
    this.getNotifications();
    this.watchNotifications();
  }

  watchNotifications() {
    this.notifications$.subscribe((res) => {
      this.notificaitonsLength = res.length;
    });
  }

  getNotifications() {
    this.notificationService.getNotifications();
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.user = user;

    this.authService.getUser().subscribe(res => this.user = res);
  }

  goToSearchPage() {
    this.router.navigateByUrl('search')
  }

  setNotificationsAsSeen() {
    this.notificationService.setNotificationsAsSeen();
  }

}
