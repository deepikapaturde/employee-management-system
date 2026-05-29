import { Injectable, inject } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private http = inject(HttpClient);

  private apiUrl =
    environment.baseUrl.concat('/employees');

  // GET ALL EMPLOYEES

  getEmployees(): Observable<any> {

    return this.http.get(this.apiUrl);
  }

  // GET EMPLOYEE BY ID

  getEmployeeById(id: number): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/${id}`
    );
  }

  // ADD EMPLOYEE

  addEmployee(data: any): Observable<any> {

    return this.http.post(
      this.apiUrl,
      data
    );
  }

  // UPDATE EMPLOYEE

  updateEmployee(
    id: number,
    data: any
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${id}`,
      data
    );
  }

  // DELETE EMPLOYEE

  deleteEmployee(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}