import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userKey = '$duo-finder:user';

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(model: { email: string; password: string }) {
    const url = `${environment.apiUrl}login`;
    
    return this.http.post<any>(url, model);
  }

  registe(model: IUser) {
    const url = `${environment.apiUrl}user`;
    
    return this.http.post<any>(url, model);
  }

  logout() {
    this.router.navigateByUrl('auth');
  }

  setUserLocalStorage(user: IUser) {
    const userJSON = JSON.stringify(user);

    localStorage.setItem(this.userKey, userJSON);
  }

  getUserLocalStorage(): IUser | null {
    const user = localStorage.getItem(this.userKey);

    if (user)
      return JSON.parse(user) as IUser;

    return null;
  }

}
