import { environment } from "./../../../environments/environment";
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
    return this.http
      .post<SignUpResponse>(
        environment.enviromentURL + environment.SignUpEndpoint,
        request,
        httpOptions
      )
      .pipe
      //  catchError(this.handleError('signup', request))
      ();
  }
}
