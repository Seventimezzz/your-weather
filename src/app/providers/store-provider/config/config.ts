import { configureStore } from '@reduxjs/toolkit'
import { apiSlice, currentPositionSlice } from 'features/index'
import { calendarSlice } from 'widgets/calendar'
import { yandexApi } from 'features/api/yandexApiSlice'

export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        location: currentPositionSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [yandexApi.reducerPath]: yandexApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware)
            .concat(yandexApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch