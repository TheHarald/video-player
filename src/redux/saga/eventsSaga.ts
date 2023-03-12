import { call, put, takeEvery } from 'redux-saga/effects'
import { Event } from '../../types/Event'
import { getEventsFailure, getEventsSuccess } from '../features/eventsSlice/eventsSlice'


function* eventsWorker() {
    try {
        const response: Response = yield (call(() => fetch('https://www.mocky.io/v2/5e60c5f53300005fcc97bbdd')))
        const events: Event[] = yield response.json()
        const sortedevents: Event[] = yield events.sort(((a, b) => a.timestamp - b.timestamp))
        yield put(getEventsSuccess(sortedevents))
    } catch (error: unknown) {
        if (error instanceof Error) {
            yield put(getEventsFailure(error.message))
        }
    }
}
export function* eventsWatcher() {
    yield takeEvery('events/getEventsFetch', eventsWorker)
}