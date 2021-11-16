import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Tutorial } from './../../models/tutorial.model'
import { User } from './../../models/tutorial.model'
import * as TutorialActions from './../../actions/tutorial.action';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    role: new FormControl(''),
    experience: new FormControl('')
  });

  constructor(private store: Store<AppState>) { }

  addTutorial(firstName: string, lastName: string, ageVal: string, gender: string, role: string, experience: string) {
    let age = Number(ageVal);
    let id = lastName+firstName;
    this.store.dispatch(new TutorialActions.AddUser({ id: id, firstName: firstName, lastName: lastName, age: age, gender: gender, role: role, experience: experience }));
    this.form.reset();
  }

  ngOnInit() {
  }

}
