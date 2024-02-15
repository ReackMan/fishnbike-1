// import { TodolistActionsType } from '../features/TodolistsList'
// import { AppActionsType } from '../features/Application'
// import { AuthActionsType } from '../features/Auth'
// import { FieldErrorType } from '../api/types'
import { rootReducer } from '../App/reducers'
import { ThunkDispatch } from 'redux-thunk'

export type FieldErrorType = { field: string; error: string }

export type RootReducerType = typeof rootReducer
// export type AllActionsType = TodolistActionsType | AppActionsType | AuthActionsType
export type ThunkError = { rejectValue: { errors: Array<string>; fieldsErrors?: Array<FieldErrorType> } }
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatch = ThunkDispatch<AppStateType, any, any>
