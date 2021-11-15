import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Tutorial } from './../../models/tutorial.model'
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
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private store: Store<AppState>) {}

  addTutorial(id:string, name: string, description: string) {    
    this.store.dispatch(new TutorialActions.AddTutorial({id: Number(id), name: name, description: description}) );
    this.form.reset();
  }

  ngOnInit() {
  }

}
