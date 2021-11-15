import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.action'

const initialState: Tutorial = {
    id: 1,
    name: "Physics",
    description: "abc"
}

export function reducers(state: Tutorial[] = [initialState], action: Action) {
    let tutorialAction = action as TutorialActions.Actions;
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, tutorialAction.payload];

        case TutorialActions.REMOVE_TUTORIAL:
            const index:any = tutorialAction.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}

