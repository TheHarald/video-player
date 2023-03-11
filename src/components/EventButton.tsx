import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

type EventButtonProps = {
    timestamp: number;
    playeRef: React.RefObject<ReactPlayer>
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

    function milisecondsToTime(timestamp: number) {
        const date = new Date(timestamp);
        const miliseconds = date.getMilliseconds()
        const seconds = date.getSeconds()
        const minutes = date.getMinutes()
        return `
            ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${miliseconds < 100 ? '0' + miliseconds : miliseconds < 10 ? '00' + miliseconds : miliseconds} 
        `
    }

    function getSeconds(timestamp: number) {
        return Math.trunc(timestamp / 1000)
    }

    function handleClick() {
        props.playeRef.current?.seekTo(getSeconds(props.timestamp))
    }

    return (
        <StyledEventButton onClick={handleClick}>
            {milisecondsToTime(props.timestamp)}
        </StyledEventButton>
    );
}

export default EventButton;