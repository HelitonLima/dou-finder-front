import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmLogoutComponent } from 'src/app/components/modals/confirm-logout/confirm-logout.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
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

}
