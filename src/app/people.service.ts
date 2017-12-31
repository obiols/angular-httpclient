import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Person>('https://reqres.in/api/users/23')
      .retryWhen(err => {
        let retries = 3;
        return err
          .delay(1000)
          .flatMap((err) => {
            if (retries-- > 0) {
              return Observable.of(err);
            } else {
              return Observable.throw(err);
            }
          });
      });
  }

}
