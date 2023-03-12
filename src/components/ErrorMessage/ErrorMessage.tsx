import React from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
    message: string
}

const StyledErrorMessage = styled.span<ErrorMessageProps>`
    color: red;
    font-size: 20px;
    display: ${props => props.message ? 'block' : 'none'};

`

function ErrorMessage(props: ErrorMessageProps) {
    return (
        <StyledErrorMessage {...props}>
            {props.message}
        </StyledErrorMessage>
    );
}

export default ErrorMessage;