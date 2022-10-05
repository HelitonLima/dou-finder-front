import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../auth.scss']
})
export class SignupComponent implements OnInit {

  public isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  signup() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      console.log('cadastrou');
    }, 3000);
  }

}
