import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { filter, Observable } from 'rxjs';

import { SecurityService } from '../services';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private _securityService: SecurityService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      // Skip `sent` response
      filter((response) => response?.type !== 0)
    );
  }
}
