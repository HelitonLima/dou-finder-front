import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public isMobile = window.innerWidth <= 960;

  constructor(
    private http: HttpClient
  ) { }

  getRoles() {
    const url = `${environment.apiUrl}roles`;
    
    return this.http.get<{values: string[]}>(url);
  }

  getChampions() {
    const url = `${environment.apiUrl}champions`;
    
    return this.http.get<string[]>(url);
  }

  generateId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
