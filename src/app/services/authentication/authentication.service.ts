import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token = null;
  private user = null;

  constructor(private http: HttpClient, private cookieService: CookieService ) { }

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


  storeToken(token: any){
    this.token = token
  }

  storeUser(user: any){
    this.user = user
    if(this.user !== null){
      return true
    }
    else{
      return false;
    }
  }


  getToken(){
    const token = new Observable((observer)=>{
      if(this.token){
        let token = this.token
        observer.next(token)
      }
      else{
        observer.error('token not found');
      }
    })
    return token
  }

  getUser(){
    const user = new Observable((observer)=>{
      if(this.user){
        let user = this.user
        observer.next(user)
      }
      else{
        observer.error('user not found');
      }
    })
    return user
  }

}
