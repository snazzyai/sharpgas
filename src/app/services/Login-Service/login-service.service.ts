import { Injectable } from "@angular/core";
import { environment } from "./../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {AuthenticationService} from '../Authentication/authentication.service'
import {
  LoginResponse,
  LoginRequest,
  BookDetails,
  BookResponse
} from "../../Utilities/APIFramework";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginServiceService {




constructor(private http: HttpClient, private authentication: AuthenticationService) {}

  SubmitLoginForm(request: LoginRequest, token: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      })
    }

    return this.http
      .post<any>(
        environment.enviromentURL + environment.LoginEndPoint,
        request,
        httpOptions
      )
      .pipe

      (
        catchError(err => err)
      );
  }
}
