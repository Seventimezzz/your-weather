import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { getDateToString } from 'shared/utils'

export interface CalendarState {
  date: string
}

const initialState: CalendarState = {
    date: getDateToString(dayjs()),
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction <string>) => {
            state.date = action.payload
        },
    },
})

export const { setDate } = calendarSlice.actions

export default calendarSlice.reducer