import { Injectable} from '@angular/core';
import { HttpClientModule, HttpInterceptor, HttpRequest,HttpResponse, HttpEvent , HttpHandler} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const duplicate = req.clone({ params: req.params.set('filter', 'completed') });

    return next.handle(duplicate);
  }
}
