import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.scss']
})
export class ConfirmLogoutComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmLogoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { msg: string },
  ) { }

  ngOnInit() {
  }

}
