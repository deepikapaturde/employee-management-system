import { Injectable, inject } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class userService {

  private http = inject(HttpClient);

  private apiUrl =
    environment.baseUrl.concat('/auth/register');

  // GET ALL Users

  getUsers(): Observable<any> {

    return this.http.get(this.apiUrl);
  }

  // GET User BY ID

  getUserById(id: number): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/${id}`
    );
  }

  // ADD user

  addUser(data: any): Observable<any> {

    return this.http.post(
      this.apiUrl,
      data
    );
  }

  // UPDATE user

  updateUser(
    id: number,
    data: any
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${id}`,
      data
    );
  }

  // DELETE USer

  deleteUser(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}