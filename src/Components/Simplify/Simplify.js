import React from 'react';
import { SimplifyWrapper, SimplifyContainer } from "./SimplifyStyle";
import Button from "../Button";


function Simplify() {
    return (
        <SimplifyWrapper>
            <SimplifyContainer>
                <h4>Simplify how your team works today.</h4>
                <Button bg={"#fafafa"} textColor="#f25f3a" hoverColor="#dfdfdf" text="Get Started"/>
            </SimplifyContainer>
        </SimplifyWrapper>
    )
}

export default Simplify;