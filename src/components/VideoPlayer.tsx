import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getEventsFetch, setCurrenTtime } from '../redux/eventsSlice';
import EventButton from './EventButton';
import EventCard from './EventCard';


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

const StyledErrorMessage = styled.span`
    color: red;
    font-size: 20px;
`

function VideoPlayer() {

    const { events, isLoading, error } = useAppSelector(state => state.events)
    const currentTime = useAppSelector(state => state.events.currentTime)
    const playerRef = useRef<ReactPlayer>(null)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getEventsFetch())
    }, [])

    const updateTime = () => {
        dispatch(setCurrenTtime(Math.trunc(playerRef.current.getCurrentTime() * 1000)))
        requestAnimationFrame(updateTime);
    };

    const handlePlay = () => {
        requestAnimationFrame(updateTime);
    };

    const handlePause = () => {
        dispatch(setCurrenTtime(Math.trunc(playerRef.current.getCurrentTime() * 1000)))
    };

    const handleVideoClick = () => {
        const player = playerRef.current.getInternalPlayer();
        if (player.getPlayerState() === 1) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    };

    return (
        <StyledVideoPlayer>
            <StyledVideoContainer onClick={handleVideoClick}>
                <ReactPlayer
                    url={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
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
                            currentTime={currentTime}
                        />
                    })
                }
            </StyledVideoContainer>

            <StyledErrorMessage>
                {error}
            </StyledErrorMessage>

            <StyledEventsContainer>
                {
                    isLoading ? <span>Загрузка</span> : events.map(event => {
                        return <EventButton
                            timestamp={event.timestamp}
                            playeRef={playerRef}
                            key={event.id}
                        />
                    })
                }
            </StyledEventsContainer>
        </StyledVideoPlayer>
    );
}

export default VideoPlayer;