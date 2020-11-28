import { Injectable } from "@angular/core";
import { environment } from "./../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  LoginResponse,
  LoginRequest,
  BookDetails,
  BookResponse
} from "../../Utilities/APIFramework";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",
  })
};
@Injectable({
  providedIn: "root"
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  submitLoginForm(request: LoginRequest): Observable<any> {
    console.log(`url ${environment.enviromentURL + environment.LoginEndPoint}`);
    return this.http
      .post<any>(
        environment.enviromentURL + environment.LoginEndPoint,
        JSON.stringify(request),
        httpOptions
      )
      .pipe
      //  catchError(this.handleError('signup', request))
      ();
  }

  isAuthenticated() {
    let user = JSON.parse(localStorage.getItem("user"));
    return user != null;
  }

  storeUser(){

  }


}
