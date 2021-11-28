import React from 'react';
import { BannerWrapper, BannerContainer, BannerText } from "./BannerStyle";
import Button from "../Button";


function Banner() {
    return (
        <BannerWrapper>
            <BannerContainer>
                <img src="./images/illustration-intro.svg" alt="Banner" />
                <BannerText>
                    <h1>Bring everyone together to build better products.</h1>
                    <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <Button bg={"#f25f3a"} textColor="#fafafa" hoverColor="#f78b70" text="Get Started"/>
                </BannerText>
            </BannerContainer>
        </BannerWrapper>
    )
}

export default Banner;