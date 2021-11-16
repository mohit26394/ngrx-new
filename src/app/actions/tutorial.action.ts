import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'
import { User } from '../models/tutorial.model'

export const ADD_USER       = '[TUTORIAL] Add'
export const REMOVE_USER    = '[TUTORIAL] Remove'

export class AddUser implements Action {
    readonly type = ADD_USER

    constructor(public payload: User) {}
}

export class RemoveUser implements Action {
    readonly type = REMOVE_USER

    constructor(public payload: number) {}
}

export type Actions = AddUser | RemoveUser;