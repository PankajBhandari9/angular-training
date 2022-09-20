import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

// const headerData = {
//   headers: { 'Content-Type': 'application/json' }
// };

// interceptor: which is used to manipulate req and resp
// this will help us by default to transfer headerData 
// ng g interceptor ==> when we will perform the rest call.

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  registerUser(data: Register): Observable<any> {
    let endPoint = '/api/users/register';
    return this.httpClient.post(endPoint, data);
    // return this.httpClient.post(endPoint, data, headerData);
  }

  loginUser(data: any): Observable<any> {
    return this.httpClient.post('/api/users/login', data);
  }

}
