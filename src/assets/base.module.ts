import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertService } from 'src/app/services/alert.service';
import { MaterialModule } from './material.module';
import { UtilService } from 'src/app/services/util.service';
import { ErrorInterceptor } from 'src/app/interceptors/error.interceptor';

@Injectable()
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    // TooltipModule,
    MaterialModule,
  ],
  providers: [
    AlertService,
    UtilService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ToastrModule,
    MaterialModule,
  ]
})

export class BaseModule { }