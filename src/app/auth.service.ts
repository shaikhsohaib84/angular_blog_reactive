import { Injectable } from '@angular/core';

import { LoginPayLoad } from './auth/login-payload';
import { RegisterPayLoad } from './auth/register-payload';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = "http://localhost:8000/api/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  login(loginPayLoad: LoginPayLoad): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.httpClient.post(this.baseUrl + 'user/login', loginPayLoad, { headers:headers }).pipe(map(data=>
      {
        this.localStorageService.store('loginData',data);
        return true;
      }));
  }

  register(registerPayLoad: RegisterPayLoad): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'user/signup', registerPayLoad, { headers:headers });
  }

  //this function will authenticate whether user has logged in or not
  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('loginData') != null;
  }

  //clear the user session/data
  logout(){
    this.localStorageService.clear('loginData');
  }

  deleteUser(id:Number){
    let headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.delete(this.baseUrl + 'user/ userDelete/' + id, { headers:headers })
  }

  updateUser(UpdatePayLoad:RegisterPayLoad, id:Number):Observable<any>{
    let headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.patch(this.baseUrl + 'user/userupdate/' + id,UpdatePayLoad, { headers:headers })
  }
}
