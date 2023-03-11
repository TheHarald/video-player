import createSagaMiddlware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';
import { eventsWatcher } from './eventsSaga';


const sagaMiddlware = createSagaMiddlware()

export const store = configureStore({
    reducer: {
        events: eventsReducer,
    },
    middleware: [sagaMiddlware]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

sagaMiddlware.run(eventsWatcher)