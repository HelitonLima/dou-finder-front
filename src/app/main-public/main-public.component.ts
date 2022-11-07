import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-public',
  templateUrl: './main-public.component.html',
  styleUrls: ['./main-public.component.scss']
})
export class MainPublicComponent implements OnInit {

  public isMobile = this.utilService.isMobile;

  constructor(
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
  }

}
