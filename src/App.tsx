import { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'
import VidyardPlayer from 'react-player/vidyard'
import styled from 'styled-components'
import VideoPlayer from './components/VideoPlayer'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getEventsFetch } from './redux/eventsSlice'


const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`


function App() {

  return (
    <StyledAppContainer >
      <VideoPlayer />
    </StyledAppContainer>
  )
}

export default App
