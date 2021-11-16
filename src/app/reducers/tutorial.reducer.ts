import { Action } from '@ngrx/store'
import { Tutorial, User } from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.action'

const initialState: User = {
    id: "1",
    firstName: "Mohit",
    lastName: "Tiwari",
    age: 27,
    gender: "male",
    role: "frontEndDev",
    experience: "5"
}

export function reducers(state: User[] = [initialState], action: Action) {
    let tutorialAction = action as TutorialActions.Actions;
    switch (action.type) {
        case TutorialActions.ADD_USER:
            return [...state, tutorialAction.payload];

        case TutorialActions.REMOVE_USER:
            const index:any = tutorialAction.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}

