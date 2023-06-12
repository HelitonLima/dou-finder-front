import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  runRefreshToken: boolean = true;

  constructor(
    public authService: AuthService,
    public alertService: AlertService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      tap((data) => {
        if (data instanceof HttpResponse) {
          if (data.body && data.body.error) {
            this.alertService.error(data.body.error);
            throw new Error(data.body.error);
          }
        }
      }),
      catchError((err) => {
        console.log(err)

        switch (err.status) {
          case 0:
            this.alertService.error(err.statusText);

            break;
          case 400:
          case 401:
            this.alertService.error(
              err.error !== null ? 'Não autorizado' : 'Sessão expirada'
            );
            this.authService.logout();

            break;
          case 403:
          case 404:
          case 409:
            this.alertService.error(err.error.message);

            break;
          case 415:
            this.alertService.error('Arquivo não suportado.');

            break;
          case 500:
            const error = err.error.message || err.statusText;

            this.alertService.error(error);
            break;
          case 503:
          case 504:
            this.alertService.error('Ocorreu um erro com o servidor.');

            break;
        }

        return throwError(err);
      })
    );
  }
}
