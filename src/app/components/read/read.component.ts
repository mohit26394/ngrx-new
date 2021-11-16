import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../../models/tutorial.model';
import { User } from './../../models/tutorial.model';
import { AppState } from './../../app.state';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import * as TutorialActions from './../../actions/tutorial.action';
import { BtnCellRenderer } from '../btn-cell-renderer';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {

  tutorials: Observable<User[]>;

  frameworkComponents: any;
  columnDefs: ColDef[] = [
    {
      field: "id", headerName: "Action",
      cellRenderer: 'delCellRenderer',
      cellRendererParams: {
        clicked: function (field: any) {
          // alert(`${field} was clicked`);
          // this.deleteCurrentUser(`${field}`);

          // this.store.dispatch(deleteUserObject({ user: `${field}` }));
        }
        // clicked: deleteCurrentUser(field)
      },
      maxWidth: 75
    },
    { field: 'firstName' },
    { field: 'lastName'},
    { field: 'age'},
    { field: 'gender'},
    { field: 'role'},
    { field: 'experience'},
];

rowData: User[] | undefined;
// rowData = [
//     { id: 'Toyota', name: 'Celica', description: 35000 },
//     { id: 'Ford', name: 'Mondeo', description: 32000 },
//     { id: 'Porsche', name: 'Boxter', description: 72000 }
// ];

  constructor(private store: Store<AppState>) { 
    this.frameworkComponents = this.frameworkComponents = {
      delCellRenderer: BtnCellRenderer
    };
    this.tutorials = store.select('user');

    this.tutorials.subscribe(state =>{
      this.rowData = state;
      console.log("sub state:", state)
    } 
    )

  }

  ngOnInit() {    
  }

  delTutorial(id: number) {
    this.store.dispatch(new TutorialActions.RemoveUser(id) )
    console.log("delete clicked", id, Number(id));
    
  }

  

}