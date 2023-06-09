import { UtilService } from 'src/app/services/util.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../auth.scss']
})
export class SignupComponent implements OnInit {

  public roles: string[] = [];
  public isLoading = false;
  public form = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    roles: new FormControl([], Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private utilService: UtilService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRoles();
  }

  signup() {
    if (this.form.valid) {
      const value = this.form.getRawValue();

      if (value.password !== value.confirmPassword) {
        this.alertService.warning('Senhas não são iguais!');

        return;
      }

      this.isLoading = true;

      this.authService.registe(value).subscribe({
        next: (res: {user: IUser}) => {
          this.authService.setUserLocalStorage(res.user);

          this.router.navigateByUrl("");

          this.alertService.success("Você foi cadastrado com sucesso!");
          this.isLoading = false;
        }, error: () => {
          this.isLoading = false;
        }
      });
    } else {
      this.alertService.warning('Preencha os campos corretamente!');
    }
  }

  getRoles() {
    this.utilService.getRoles().subscribe({
      next: (res) => {
        this.roles = res.values;
      }
    });
  }

}
