import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../../models/tutorial.model';
import { AppState } from './../../app.state';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import * as TutorialActions from './../../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'description'}
];

rowData: Tutorial[] | undefined;
// rowData = [
//     { id: 'Toyota', name: 'Celica', description: 35000 },
//     { id: 'Ford', name: 'Mondeo', description: 32000 },
//     { id: 'Porsche', name: 'Boxter', description: 72000 }
// ];

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');

    this.tutorials.subscribe(state =>{
      this.rowData = state;
      console.log("sub state:", state)
    } 
    )

  }

  ngOnInit() {    
  }

  delTutorial(id: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(id) )
    console.log("delete clicked", id, Number(id));
    
  }

  

}