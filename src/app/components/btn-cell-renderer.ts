import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRenderer, ICellRendererParams } from "ag-grid-community";
import { AppState } from "../app.state";
import { RemoveUser } from "../actions/tutorial.action";
// import * as TutorialActions from '../actions/tutorial.action'


@Component({
    selector: 'btn-cell-renderer',
    template: `
      <button (click)="btnClickedHandler()">Click me!</button>
    `,
})
export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
    private params: any;

    constructor(private store: Store<AppState>){}

    refresh(params: ICellRendererParams): boolean {
        // throw new Error("Method not implemented.");
        return false;
    }
    agInit(params: any): void {
        this.params = params;
    }

    btnClickedHandler() {
        this.params.clicked(this.params.value);
        this.store.dispatch(new RemoveUser(this.params));
    }

    ngOnDestroy() {
        // no need to remove the button click handler 
        // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
    }
}