import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDuo } from '../models/duo.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DuoService {

  constructor(
    private http: HttpClient
  ) { }

  getDuos(idUser: string) {
    const url = `${environment.apiUrl}duo?idUser=${idUser}`;

    return this.http.get<IDuo[]>(url);
  }

  createDuo(model: IDuo) {
    const url = `${environment.apiUrl}duo`;
    
    return this.http.post<IDuo>(url, model);
  }

  deleteDuo(idDuo: string) {
    const url = `${environment.apiUrl}duo?idDuo=${idDuo}`;

    return this.http.delete(url);
  }

  searchDuo(model: any) {
    const url = `${environment.apiUrl}search-duo`;

    return this.http.post<IUser[]>(url, model);
  }
}
