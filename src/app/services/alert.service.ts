import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(public toastr: ToastrService) {}

  public success(message: string, title?: string, options?: any) {
    this.toastr.success(message, title, options);
  }

  public warning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  public error(message: string, title?: string, isHtml: boolean = false) {
    this.toastr.error(message, title, { enableHtml: isHtml, timeOut: 7000 });
  }
}
