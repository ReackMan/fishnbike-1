import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from './reducers'


export const store = configureStore({
    reducer: rootReducer,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk).concat(logger),
    // middleware: [thunk, logger]
})

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
    })
}