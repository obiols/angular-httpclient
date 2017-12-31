import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  fetchPeople(): Observable<Object> {
    return this.http.get<Person>('https://reqres.in/api/users/2', {
      headers: new HttpHeaders().set('app-language', 'it')
    });
  }

}
