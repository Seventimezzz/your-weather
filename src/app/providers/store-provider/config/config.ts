import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from 'features/index'
import { apiSlice } from 'features/index' 

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch