import styled from "styled-components";





export const SectionWrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;
`




export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`




export const SectiontTitleBox = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    padding: 0 2rem;
    animation: enterFromLeft 1s ease-in-out;

    h2 {
        font-weight: var(--fw-bold);
        color: var(--dark-blue);
        font-size: 26px;
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    p {
        color: var(--dark-grayish-blue);
        font-size: 14px;
        line-height: 1.5;
    }

    @media (min-width: 411px) {
        width: 400px;
        margin: 0 auto 4rem;


        h2 {
            font-size: 28px;
        }

        p {
            font-size: 16px;
        }
    }

    @media (min-width: 768px) {
        width: 500px;

        h2 {
            font-size: 30px;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 17px;
        }
    }

    @media (min-width: 1200px) {
        text-align: left;
        width: auto;
        margin: 0 8rem 0 0;
        padding: 0;

        p {
            font-size: 16px;
            width: 400px;
        }
    }
`




export const SectionDescBox = styled.div`
    padding-left: 1rem;
    animation: enterFromRight 1s ease-in-out;

    @media (min-width: 375px) {
        padding-left: 1.5rem;
    }

    @media (min-width: 768px) {
        padding-left: 2rem;
    }

    @media (min-width: 1220px) {
        padding-left: 0;
    }
`




export const SectionSmallBox = styled.div`
    margin-bottom: 3.5rem;

    @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
    }
`




export const SectionSmallBoxMobileTitle = styled.h3`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    background-color: var(--very-pale-red);
    color: var(--dark-blue);
    font-weight: var(--fw-medium);
    font-size: 12px;
    margin-bottom: 1rem;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;

    @media (min-width: 320px) {
        font-size: 14px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`




export const SectionNumber = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 50px;
    background-color: var(--main-orange);
    color: var(--very-light-gray);
    font-weight: var(--fw-regular);
    margin-right: 0.5rem;
    border-radius: 50px;
`




export const SectionSmallBoxNumber = styled.h3`
    display: none;

    @media (min-width: 768px) {
        display: inline-block;
        margin-right: 1rem;
        padding: 0.4rem 0.85rem;
        background-color: var(--main-orange);
        color: var(--very-light-gray);
        font-weight: var(--fw-regular);
        font-size: 14px;
        border-radius: 50px;
    }
`




export const SectionBoxText = styled.div`
    h3 {
        display: none;
    }

    p {
        color: var(--dark-grayish-blue);
        line-height: 1.5;
        padding-right: 1rem;
    }

    @media (min-width: 768px) {
        margin-top: 0.4rem;

        h3 {
            display: inline-block;
            font-weight: var(--fw-medium);
            color: var(--dark-blue);
            font-size: 18px;
            margin-bottom: 1.5rem;
        }

        p {
            padding-right: 5rem;
            font-size: 17px;
        }
    }

    @media (min-width: 1200px) {
        p {
            padding-right: 0;
        }
    }
`