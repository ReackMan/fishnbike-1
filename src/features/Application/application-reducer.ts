import { createSlice } from '@reduxjs/toolkit'
import { appActions } from '../CommonActions/App'


const { setAppError, setAppStatus } = appActions

export const slice = createSlice({
    name: 'application',
    initialState: {
        status: 'idle',
        error: null as string | null,
        isInitialized: false,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(setAppStatus, (state, action) => {
                state.status = action.payload.status
            })
            .addCase(setAppError, (state, action) => {
                state.error = action.payload.error
            })
    },
})

// types
export type AppStatusType = 'idle' | 'loading' | 'success' | 'failed'
export type AppInitialStateType = ReturnType<typeof slice.reducer>