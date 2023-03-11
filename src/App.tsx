import styled from 'styled-components'
import VideoPlayer from './components/VideoPlayer'


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
