import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from "@reduxjs/toolkit"


const initialState: { currentTime: number } = {
    currentTime: 0,
}

const videoTimeSlice = createSlice({
    name: 'currentTime',
    initialState,
    reducers: {
        setCurrenTtime(state, action: PayloadAction<number>) {
            state.currentTime = action.payload
        }
    }

})


export const { setCurrenTtime } = videoTimeSlice.actions;
export default videoTimeSlice.reducer;