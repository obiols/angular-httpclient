import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  fetchPeople(): Observable<Object> {
    /*
    const params = new HttpParams()
      .set('id', '2');

    return this.http.get<Person>('https://reqres.in/api/users/', {
      params: params
    });
    */
    return this.http.post<Person>('https://reqres.in/api/users/2', { name: 'Pete'} );
  }

}
