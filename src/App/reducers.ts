import { combineReducers } from 'redux'
import { productsReducer } from '../features/products'
import { orderReducer } from '../features/order'
import { appReducer } from '../features/Application'

export const rootReducer = combineReducers({
    products: productsReducer,
    order: orderReducer,
    app: appReducer
})