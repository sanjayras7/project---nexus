import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

    constructor(private http:HttpClient) { }
    getAllUsers():Observable<Customer[]>
    {
      return this.http.get<Customer[]>('http://localhost:5260/Customer');
    }
    addUser(newUser: Customer): Observable<Customer> {
      return this.http.post<Customer>('http://localhost:5260/Customer', newUser);
    } 
}
