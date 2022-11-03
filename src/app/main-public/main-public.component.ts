import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-main-public',
  templateUrl: './main-public.component.html',
  styleUrls: ['./main-public.component.scss']
})
export class MainPublicComponent implements OnInit {

  get isMobile() {
    return this.utilService.isMobile;
  }

  constructor(
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
  }

}
