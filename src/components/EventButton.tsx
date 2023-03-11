import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { getSeconds, milisecondsToTime } from '../utils/timeUtils';

type EventButtonProps = {
    timestamp: number;
    playerRef: React.RefObject<ReactPlayer>
}

const StyledEventButton = styled.button`
    outline: none;
    border: none;
    background: blue;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

function EventButton(props: EventButtonProps) {

    function handleClick() {
        props.playerRef.current?.seekTo(getSeconds(props.timestamp))
    }

    return (
        <StyledEventButton onClick={handleClick}>
            {milisecondsToTime(props.timestamp)}
        </StyledEventButton>
    );
}

export default EventButton;