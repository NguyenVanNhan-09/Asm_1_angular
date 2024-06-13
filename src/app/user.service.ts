import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:3000';
  RegisterUser = (data: TUser): Observable<any> => {
    return this.http.post(this.API_URL + `/register`, data);
  };
  UserLogin = (data: TUser): Observable<any> => {
    return this.http.post(this.API_URL + `/login`, data);
  };
}
