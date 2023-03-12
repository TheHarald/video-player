import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/hooks';


type EventCardProps = {
    currentTime: number;
    zone: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    timestamp: number;
    duration: number;
}

const StyledEventCard = styled.span<EventCardProps>`
    background: green;
    position: absolute;
    width: ${props => props.zone.width}px;
    height: ${props => props.zone.height}px;
    left: ${props => props.zone.left}px;
    top: ${props => props.zone.top}px;
    display: ${props => props.timestamp < props.currentTime ? (props.timestamp + props.duration > props.currentTime ? 'block' : 'none') : 'none'}
    
`

function EventCard(props: Omit<EventCardProps, 'currentTime'>) {

    const currentTime = useAppSelector(state => state.videoTime.currentTime)
    return (
        <StyledEventCard {...props} currentTime={currentTime}>
        </StyledEventCard>
    );
}

export default EventCard;