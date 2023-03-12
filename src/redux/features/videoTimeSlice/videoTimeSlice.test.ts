import { describe } from "vitest";
import reducer, { setCurrenTtime } from './videoTimeSlice'


describe('vidoTimeSlice test', () => {

    const previousState = {
        currentTime: 0,
    }

    it('should be set time', () => {
        expect(reducer(previousState, setCurrenTtime(123)).currentTime).toBe(123)
    })
    it('should be set zero in negative value', () => {
        expect(reducer(previousState, setCurrenTtime(-123)).currentTime).toBe(0)
    })
    it('should be set set zero', () => {
        expect(reducer(previousState, setCurrenTtime(0)).currentTime).toBe(0)
    })
})