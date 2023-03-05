import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RouterService } from 'src/app/services/router.service';

@Injectable()
export class AuthenticationService {

  public authorizationMessage : String;
  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpClient.post('http://localhost:3000/auth/v1/', data)
  }

  setBearerToken(token) {
    localStorage.setItem('Authorization', token);
  }

  getBearerToken() {
    return localStorage.getItem('Authorization');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated', {},
      { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) })
      .pipe(map(result => result['isAuthenticated'])).toPromise();
  }
} 
