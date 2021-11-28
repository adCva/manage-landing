import styled from "styled-components";





export const TestimonialsWrapper = styled.section`
    margin: 5rem 0;
    text-align: center;

    h3 {
        font-weight: var(--fw-bold);
        font-size: 25px;
        letter-spacing: 1px;
        color: var(--dark-blue);
        margin-bottom: 4rem;
    }

    @media (min-width: 375px) {
        h3 {
            font-size: 28px;
        }   
    }

    @media (min-width: 768px) {
        margin: 7rem 0;
    }

    @media (min-width: 1220px) {
        margin: 8rem 0;
    }
`




export const TestimonailsContainer = styled.div`
    width: 95%;
    margin: 0 auto 4rem;
    padding: 1rem 0;

    @media (min-width: 1220px) {
        display: flex;
        width: auto;
        margin: 0;
    }
`




export const TestimonailsCard = styled.div`
    margin-bottom: 3rem;

    img {
        width: 75px;
        margin-bottom: -40px;
    }
`




export const TestimonailsCardText = styled.div`
    height: 230px;
    background-color: var(--very-pale-red);
    padding: 3rem 1.5rem 2rem;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    h5 {
        font-weight: var(--fw-bold);
        font-size: 18px;
        color: var(--dark-blue);
        margin: 1rem 0;
    }

    p {
        color: var(--dark-grayish-blue);
        line-height: 1.3;
    }

    @media (min-width: 1400px) {
        height: 210px;
    }
`