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
}
