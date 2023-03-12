import { describe } from 'vitest'
import { Event } from '../../../types/Event'
import reducer, { getEventsFailure, getEventsFetch, getEventsSuccess } from './eventsSlice'

describe('Test evenSlice', () => {
    const previousState = {
        events: [],
        isLoading: false,
        error: ''
    }

    const fetchedData: Event[] = [
        { id: 1, timestamp: 320303, duration: 907, zone: { left: 535, top: 97, width: 120, height: 58 } }
    ]

    it('should loading', () => {
        expect(reducer(previousState, getEventsFetch()).isLoading).toBe(true)
    })

    it('should set error message', () => {
        expect(reducer(previousState, getEventsFailure('Error')).error).toBe('Error')
        expect(reducer(previousState, getEventsFailure('Error')).isLoading).toBe(false)
    })

    it('should set events', () => {
        expect(reducer(previousState, getEventsSuccess(fetchedData)).events.length).not.toBe(0)
    })
    it('should set events an empty array', () => {
        expect(reducer(previousState, getEventsSuccess([])).events.length).toBe(0)
    })
})