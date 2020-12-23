import { environment } from "./../../../environments/environment";
import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SignUpRequest, SignUpResponse } from "src/app/Utilities/APIFramework";
import { Observable } from "rxjs";



const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8"
  })
};

@Injectable({
  providedIn: "root"
})
export class SignUpServiceService {
  constructor(private http: HttpClient) {}

  SubmitSignUpForm(request: SignUpRequest, token: any): Observable<SignUpResponse> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      })
    }

    return this.http
      .post<any>(
        environment.enviromentURL + environment.SignUpEndpoint,
        request,
        httpOptions
      )
      .pipe
      //  catchError(this.handleError('signup', request))
      ();
  }
}
