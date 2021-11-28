import React from 'react';
import { SectionWrapper, SectionContainer, SectiontTitleBox, SectionDescBox, SectionSmallBox, SectionSmallBoxMobileTitle, SectionNumber, SectionSmallBoxNumber, SectionBoxText } from "./SectionStyle";



function Section() {
    return (
        <SectionWrapper>
            <SectionContainer>
                <SectiontTitleBox>
                    <h2>What’s different about Manage?</h2>
                    <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                </SectiontTitleBox>
                <SectionDescBox>
                    <SectionSmallBox>
                        <SectionSmallBoxMobileTitle><SectionNumber>01</SectionNumber>Track company-wide progress</SectionSmallBoxMobileTitle>
                        <SectionSmallBoxNumber>01</SectionSmallBoxNumber>
                        <SectionBoxText>
                            <h3>Track company-wide progress</h3>
                            <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                        </SectionBoxText>
                    </SectionSmallBox>
                    <SectionSmallBox>
                        <SectionSmallBoxMobileTitle><SectionNumber>02</SectionNumber>Advanced built-in reports</SectionSmallBoxMobileTitle>
                        <SectionSmallBoxNumber>02</SectionSmallBoxNumber>
                        <SectionBoxText>
                            <h3>Advanced built-in reports</h3>
                            <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                        </SectionBoxText>
                    </SectionSmallBox>
                    <SectionSmallBox>
                        <SectionSmallBoxMobileTitle><SectionNumber>03</SectionNumber>Everything you need in one place</SectionSmallBoxMobileTitle>
                        <SectionSmallBoxNumber>03</SectionSmallBoxNumber>
                        <SectionBoxText>
                            <h3>Everything you need in one place</h3>
                            <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                        </SectionBoxText>
                    </SectionSmallBox>
                </SectionDescBox>
            </SectionContainer>
        </SectionWrapper>
    )
}

export default Section;