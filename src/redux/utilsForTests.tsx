import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import eventsSlice from './eventsSlice'
import videoTimeSlice from './videoTimeSlice'
import { AppStore, RootState } from '.'


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {
            events: {
                events: [
                    { id: 1, timestamp: 320303, duration: 907, zone: { left: 535, top: 97, width: 120, height: 58 } }
                ],
                error: '',
                isLoading: false
            },
            videoTime: {
                currentTime: 14
            }
        },
        store = configureStore({ reducer: { events: eventsSlice, videoTime: videoTimeSlice }, preloadedState }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}