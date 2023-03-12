import { describe, expect, test } from 'vitest';
import { getSeconds, milisecondsToTime } from './timeUtils';

describe('check milisecondsToTime', () => {
    test('chek in 1', () => {
        expect(milisecondsToTime(1)).toBe('00:00:001')
    })
    test('chek in 0', () => {
        expect(milisecondsToTime(0)).toBe('00:00:000')
    })
    test('chek in negative ', () => {
        expect(milisecondsToTime(-123)).toBe('00:00:000')
    })
    test('chek in default value', () => {
        expect(milisecondsToTime(123)).toBe('00:00:123')
    })
    test('chek in default value', () => {
        expect(milisecondsToTime(1123)).toBe('00:01:123')
    })
})

describe('check getSeconds', () => {
    test('check in 0', () => {
        expect(getSeconds(0)).toBe(0)
    })
    test('check in 4', () => {
        expect(getSeconds(4)).toBe(0)
    })
    test('check in 1012', () => {
        expect(getSeconds(1012)).toBe(1)
    })
    test('check in 13242', () => {
        expect(getSeconds(13242)).toBe(13)
    })
    test('check in 13242', () => {
        expect(getSeconds(999)).not.toBe(1)
    })
    test('check in negative', () => {
        expect(getSeconds(-1)).toBe(0)
    })
})
