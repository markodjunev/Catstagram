import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor(private toastrService: ToastrService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        let message = ""
        if (err.status === 401) {
          //refresh token or navigate to login
          message = "Token has expired or you should be logged in"
        }
        else if (err.status === 404) {
          message = "404"
        }
        else if (err.status === 400) {
          //some message
          message = "400"
        }
        else {
          //global message for error
          message = "Unexpected error"
        }
        this.toastrService.error(message)
        return throwError(err)
      })
    )
  }
}
