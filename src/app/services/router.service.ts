import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(private router : Router) { }

  routeToDashboard() {
    return this.router.navigate(['dashboard']);
  }

  routeToLogin() {
  	return this.router.navigate(['login']);
  }
}
