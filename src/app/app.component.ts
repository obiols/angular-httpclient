import { Component } from '@angular/core';

import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people$;

  constructor(private peopleService: PeopleService) {}

  fetchPeople() {
    this.peopleService.fetchPeople()
      .subscribe(data => {
        this.people$ = data;
      });
  }
}
