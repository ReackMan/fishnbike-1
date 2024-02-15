import { asyncActions, slice } from './products-reducer'


const productsActions = {
    ...asyncActions
}

const productsReducer = slice.reducer

export { productsActions, productsReducer }