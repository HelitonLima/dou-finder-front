import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  public isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.form.valid) {
      this.isLoading = true;
  
      this.authService.login(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.isLoading = false;

          this.authService.setUserLocalStorage(res.user);

          this.router.navigateByUrl("");

          this.alertService.success("Você foi logado com sucesso!");
        }, error: () => {
          this.isLoading = false;
        }
      });
    } else {
      this.alertService.warning("Preencha os campos corretamente!");
    }

  }
}
