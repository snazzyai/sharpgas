import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",

  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


    Authenticate(request: any): Observable<any> {
    return this.http
      .post<any>(
        environment.enviromentURL + environment.authenticationEndPoint,
        request,
        httpOptions
      )
      .pipe
      //  catchError(this.handleError('signup', request))
      ();
  }

}
