import createSagaMiddlware from 'redux-saga'
import { combineReducers, configureStore, PreloadedState, applyMiddleware } from '@reduxjs/toolkit';
import eventsReducer from './features/eventsSlice/eventsSlice';
import videoTimeReducer from './features/videoTimeSlice/videoTimeSlice'
import { eventsWatcher } from './saga/eventsSaga';


const rootReducer = combineReducers({
    events: eventsReducer,
    videoTime: videoTimeReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {

    const sagaMiddlware = createSagaMiddlware()

    const store = configureStore({
        reducer: {
            events: eventsReducer,
            videoTime: videoTimeReducer
        },
        middleware: [sagaMiddlware],
        preloadedState
    })

    sagaMiddlware.run(eventsWatcher)

    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']