import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-main-public',
  templateUrl: './main-public.component.html',
  styleUrls: ['./main-public.component.scss']
})
export class MainPublicComponent implements OnInit {

  public isMobile = this.utilService.isMobile;
  public title: any = '';

  constructor(
    private utilService: UtilService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.watchChangeRoute();

    this.getScreenTitle().then(async ev => {
      this.title = await ev?.['title'];
    });
  }

  watchChangeRoute() {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.getScreenTitle().then(async ev => {
          this.title = await ev?.['title'];
        });
      }
    })
  }

  async getScreenTitle() {
    if (this.activatedRoute.children[0].snapshot.children[0].data)
      return this.activatedRoute.children[0].snapshot.children[0].data;

    return this.activatedRoute.children[0].routeConfig?.data;
  }

  hasBackProp() {
    return this.activatedRoute.children[0].routeConfig?.data?.['back'];
  }
}
