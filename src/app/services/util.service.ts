import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public isMobile = window.innerWidth <= 960;

  constructor() { }

}
