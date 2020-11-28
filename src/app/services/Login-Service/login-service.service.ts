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

@Injectable({
  providedIn: "root"
})
export class LoginServiceService {


  constructor(private http: HttpClient, private authentication: AuthenticationService) {}


  private userToken = this.authentication.getUserToken() || null;

 private httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Bearer ${this.userToken}`
  })
};

  submitLoginForm(request: LoginRequest): Observable<any> {
    console.log(`url ${environment.enviromentURL + environment.LoginEndPoint}`);
    console.log(this.userToken);
    return this.http
      .post<any>(
        environment.enviromentURL + environment.LoginEndPoint,
        request,
        this.httpOptions
      )
      .pipe
      //  catchError(this.handleError('signup', request))
      ();
  }

  isAuthenticated() {
    let user = JSON.parse(localStorage.getItem("user"));
    return user != null;
  }

}
