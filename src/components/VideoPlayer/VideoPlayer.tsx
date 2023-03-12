import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getEventsFetch } from '../../redux/features/eventsSlice/eventsSlice';
import EventButton from '../EventButton/EventButton';
import EventCard from '../EventCard/EventCard';
import { setCurrenTtime } from '../../redux/features/videoTimeSlice/videoTimeSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const StyledVideoContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
`

const StyledVideoPlayer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const StyledEventsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    padding: 16px;
`



function VideoPlayer() {

    const { events, isLoading, error } = useAppSelector(state => state.events)
    const playerRef = useRef<ReactPlayer | null>(null)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getEventsFetch())
    }, [])

    const updateTime = () => {
        if (playerRef.current) {
            dispatch(setCurrenTtime(Math.trunc(playerRef.current.getCurrentTime() * 1000)))
            requestAnimationFrame(updateTime);
        }
    };

    const handlePlay = () => {
        requestAnimationFrame(updateTime);
    };

    const handlePause = () => {
        if (playerRef.current) {
            dispatch(setCurrenTtime(Math.trunc(playerRef.current.getCurrentTime() * 1000)))
        }
    };

    const handleVideoClick = () => {
        if (playerRef.current) {
            const player = playerRef.current.getInternalPlayer();
            if (player.getPlayerState() === 1) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        }
    };

    return (
        <StyledVideoPlayer>
            <StyledVideoContainer onClick={handleVideoClick}>
                <ReactPlayer
                    url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                    controls
                    ref={playerRef}
                    onPause={handlePause}
                    onPlay={handlePlay}
                    width={'100%'}
                    height={'100vh'}
                />
                {
                    events.map(event => {
                        return <EventCard
                            key={`card_${event.id}`}
                            duration={event.duration}
                            zone={event.zone}
                            timestamp={event.timestamp}
                        />
                    })
                }
            </StyledVideoContainer>

            <ErrorMessage message={error} />

            <StyledEventsContainer>
                {
                    isLoading ? <span>Загрузка</span> : events.map(event => {
                        return <EventButton
                            timestamp={event.timestamp}
                            playerRef={playerRef}
                            key={event.id}
                        />
                    })
                }
            </StyledEventsContainer>
        </StyledVideoPlayer>
    );
}

export default VideoPlayer;