import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user.model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public isLoading = false;
  public user!: IUser;
  public icons: string[] = [
    '/assets/images/2015_Master_Poro.png',
    '/assets/images/2016_Master_Poro.png',
    '/assets/images/2017_Master_Poro.png',
    '/assets/images/2015_Poro.png',
    '/assets/images/2016_Poro.png',
    '/assets/images/2017_Poro.png',
  ];
  public roles: string[] = [];
  public champions: string[] = [];
  public championsSelected: string[] = [];
  public selectedRoles: any = [];

  public userForm = new FormGroup({
    icon: new FormControl(''),
    nickname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    roles: new FormControl([], Validators.required),
    favoriteChamps: new FormControl([])
  });

  constructor(
    private authService: AuthService,
    private utilService: UtilService,
    private alertService: AlertService
  ) { 
    this.setUser();
  }

  ngOnInit(): void {
    this.getRoles();
    this.getChampions();
  }

  changeIcon(icon: string) {
    this.userForm.controls['icon'].patchValue(icon);
  }

  removeSelectedRole(role: any) {
    const newRoles = this.userForm.getRawValue().roles.filter((s: any) => s != role);

    this.userForm.controls['roles'].patchValue(newRoles);
  }

  getRoles() {
    this.utilService.getRoles().subscribe({
      next: res => {
        this.roles = res.values;
      }
    })
  }

  getChampions() {
    this.utilService.getChampions().subscribe({
      next: res => {
        this.champions = res;
        this.championsSelected = res;
      }
    })
  }

  onKey(value: any) { 
    this.championsSelected = this.search(value.value);
  }
    
  search(value: string) { 
    let filter = value.toLowerCase();

    return this.champions.filter(option => option.toLowerCase().startsWith(filter));
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null) {
      this.user = user;

      this.userForm.patchValue({
        icon: user.icon,
        nickname: user.nickname,
        roles: user.roles,
        favoriteChamps: user.favoritesChamps
      });
    }

    this.authService.getUser().subscribe(res => this.user = res);
  }

  cancel() {
    this.setUser();
  }

  save() {
    if (this.userForm.valid) {
      const value = this.userForm.getRawValue();
  
      this.user.icon = value.icon;
      this.user.nickname = value.nickname;
      this.user.roles = value.roles;
      this.user.favoritesChamps = value.favoriteChamps;

      this.isLoading = true;
      
      this.authService.update(this.user).subscribe({
        next: res => {
          this.authService.emitUser(res.user);
          this.authService.setUserLocalStorage(res.user);
          
          this.user = res.user;
          
          this.alertService.success("Sua conta foi salva com sucesso!");
          this.isLoading = false;
        }, error: () => {
          this.isLoading = false;
        }
      })
    }
  }

}
