import { environment } from "./../../../environments/environment.prod";
import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SignUpRequest, SignUpResponse } from "src/app/Utilities/APIFramework";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

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

  SubmitSignUpForm(request: SignUpRequest): Observable<SignUpResponse> {
    console.log(
      "request from service" +
        JSON.stringify(request) +
        "headers " +
        JSON.stringify(httpOptions)
    );
    return this.http
      .post<SignUpResponse>(
        environment.enviromentURL + environment.SignUpEndpoint,
        JSON.stringify(request),
        httpOptions
      )
      .pipe
      //  catchError(this.handleError('signup', request))
      ();
  }
}
