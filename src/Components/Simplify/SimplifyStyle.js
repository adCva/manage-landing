import styled from "styled-components";




export const SimplifyWrapper = styled.section`
    background: url("./images/bg-simplify-section-mobile.svg") center/cover no-repeat;
    height: 300px;
    background-color: var(--main-orange);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
        background: url("./images/bg-simplify-section-desktop.svg") center/cover no-repeat;
        background-color: var(--main-orange);
    }

    @media (min-width: 1220px) {
        height: 220px;
    }
`




export const SimplifyContainer = styled.div`
    width: min(80%, 1200px);
    margin: 0 auto;

    h4 {
        color: var(--very-light-gray);
        font-weight: var(--fw-medium);
        font-size: 26px;
        line-height: 1.4;
        margin-bottom: 2rem; 
    }

    @media (min-width: 375px) {
        h4 {
            font-size: 34px;
            margin-bottom: 2.5rem; 
        }
    }

    @media (min-width: 1120px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
            text-align: left;
            width: 40%;
            margin-bottom: 0; 
        }
    }
`