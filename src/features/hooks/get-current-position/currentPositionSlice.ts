import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentPositionState {
    position: string
}

const initialState: CurrentPositionState = {
    position: '',
}

export const currentPositionSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        setPosition: (state, action: PayloadAction <string>) => {
            state.position = action.payload
        },
    },
})

export const { setPosition } = currentPositionSlice.actions

export default currentPositionSlice.reducer