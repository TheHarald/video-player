import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Event } from "../types/Event";


const initialState: { events: Event[], isLoading: boolean, error: string, currentTime: number } = {
    events: [],
    isLoading: false,
    currentTime: 0,
    error: ''
}


const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        getEventsFetch: (state) => {
            state.isLoading = true
        },
        getEventsSuccess(state, action: PayloadAction<Event[]>) {
            state.events = action.payload
            state.isLoading = false
        },
        getEventsFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        setCurrenTtime(state, action: PayloadAction<number>) {
            state.currentTime = action.payload
        }
    }
})


export const { getEventsFailure, getEventsSuccess, getEventsFetch, setCurrenTtime } = eventSlice.actions;
export default eventSlice.reducer;
