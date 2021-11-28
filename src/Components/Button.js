import React from 'react';
import styled from "styled-components";

function Button(props) {
    const displayClickMessage = () => {
        alert("This button is just for show.");
    };


    return (
        <ButtonWrapper onClick={displayClickMessage} bgColor={props.bg} textColor={props.textColor} hoverColor={props.hoverColor}>{props.text}</ButtonWrapper>
    )
}

export default Button
;






const ButtonWrapper = styled.button`
    background-color: ${({bgColor}) => (bgColor)};
    color: ${({textColor}) => (textColor)};

    border: none;
    border-radius: 50px;
    outline: none;

    height: 40px;
    width: 120px;
    box-shadow: rgba(242, 95, 58, 0.3) 0px 15px 25px;
    font-weight: var(--fw-medium);
    letter-spacing: 0.7px;
    cursor: pointer;
    transition: var(--transition);

    :hover {
        background-color: ${({hoverColor}) => (hoverColor)};
    }

    :focus {
        background-color: ${({hoverColor}) => (hoverColor)};
    }
`