import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-main-public',
  templateUrl: './main-public.component.html',
  styleUrls: ['./main-public.component.scss']
})
export class MainPublicComponent implements OnInit {

  public isMobile = this.utilService.isMobile;

  constructor(
    private utilService: UtilService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  getScreenTitle() {
    return this.activatedRoute.children[0].routeConfig?.data?.['title'];
  }
}
