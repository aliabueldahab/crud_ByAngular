import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaUBleGFtcGxlLmNvbSIsImlhdCI6MTc0NDk4MDYzNCwiZXhwIjoxNzQ1MDIzODM0fQ.4_PgUMlfQGFu1LdMyi3R_fqAe_oHQifn8tqrfnkYA7o'
    
    request = request.clone({
      
      setHeaders: {
        'Authorization': `Bearer ${validToken}`
      }
    });
    return next.handle(request);  
  }
} 
