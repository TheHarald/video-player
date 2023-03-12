import createSagaMiddlware from 'redux-saga'
import { combineReducers, configureStore, PreloadedState, applyMiddleware } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';
import videoTimeReducer from './videoTimeSlice'
import { eventsWatcher } from './eventsSaga';


const sagaMiddlware = createSagaMiddlware()

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        videoTime: videoTimeReducer
    },
    middleware: [sagaMiddlware]
})

sagaMiddlware.run(eventsWatcher)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppStore = RootState

// const rootReducer = combineReducers({
//     events: eventsReducer,
//     videoTime: videoTimeReducer,
// })

// export const setupStore = (preloadedState?: PreloadedState<RootState>) => {

//     return configureStore({
//         reducer: {
//                     events: eventsReducer,
//                     videoTime: videoTimeReducer
//                 },
//         middleware: [sagaMiddlware],
//         preloadedState
//     })
// }