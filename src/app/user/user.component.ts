import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

private id: any;
  name: any;
  time: any;
  location: any;
  workout: any;
  message: any;

  constructor() {
  }
  //didn't know how to use an API so just hardcoded... sorry!
    getuserdata(){
          this.id = 1;
          this.name = 'Olivia';
          this.time = '7am - 10am';
          this.location = 'Downtown, Nashville, TN';
          this.workout = 'cardio';
          this.message = 'Hello! My name is Olivia and I’m from Nashville, TN. I would love to find a new gym buddy who is interested in doing cardio, ab workouts, or begin lifting. ';
    }

 ngOnInit(): void {
   this.getuserdata();
}
}
