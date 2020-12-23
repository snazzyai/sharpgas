import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthenticationService } from "../Authentication/authentication.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token;
    this.authService.getToken().subscribe(respToken=>{
      token = respToken
    })
    if(token){
      // this.router.navigate(["onboarding/dashboard"])
      return true
    }
    else{
      // this.router.navigate(["onboarding/login"]);
      return false;
    }
  }
}
