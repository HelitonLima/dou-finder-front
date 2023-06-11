import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userKey = '$duo-finder:user';
  public userEmitter$ = new Subject<IUser>();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(model: { email: string; password: string }) {
    const url = `${environment.apiUrl}login`;
    
    return this.http.post<{user: IUser}>(url, model);
  }

  register(model: IUser) {
    const url = `${environment.apiUrl}user`;
    
    return this.http.post<{user: IUser}>(url, model);
  }

  update(model: IUser) {
    const url = `${environment.apiUrl}user`;
    
    return this.http.put<{user: IUser}>(url, model);
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

  emitUser(res: IUser) {
    this.userEmitter$.next(res);
  }

  getUser() {
    return this.userEmitter$.asObservable();
  }

}
