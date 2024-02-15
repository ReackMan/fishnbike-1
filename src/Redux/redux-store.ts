import {legacy_createStore as createStore, combineReducers, AnyAction} from 'redux';
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import orderReducer, {OrderActionsTypes} from "./order-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

// function saveToLocalStorage(state: AppStateType) {
//     try {
//         const serialisedState = JSON.stringify(state);
//         localStorage.setItem("persistantState", serialisedState);
//     } catch (e) {
//         console.warn(e);
//     }
// }
//
// function loadFromLocalStorage() {
//     try {
//         const serialisedState = localStorage.getItem("persistantState");
//         if (serialisedState === null) return undefined;
//         return JSON.parse(serialisedState);
//     } catch (e) {
//         console.warn(e);
//         return undefined;
//     }
// }
//
// export let reducers = combineReducers({
//     order: orderReducer,
//     products: productsReducer
// });
//
// let store = createStore(reducers);

// store.subscribe(() => saveToLocalStorage(store.getState()));
//
// export type AppStateType = ReturnType<typeof store.getState>
//
// export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
//
// export default store;
//
// // @ts-ignore
// window.store = store;
export {}