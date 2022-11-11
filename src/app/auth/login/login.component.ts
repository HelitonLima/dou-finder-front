import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit {

  public isLoading = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl("");
    }, 3000);
  }
}
