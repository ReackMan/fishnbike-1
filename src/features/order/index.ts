import { asyncActions, slice } from './order-reducer'

const orderActions = {
    ...asyncActions
}

const orderReducer = slice.reducer

export { orderActions, orderReducer }