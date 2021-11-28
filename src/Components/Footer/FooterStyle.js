import styled from "styled-components";




export const FooterWrapper = styled.section`
    background-color: var(--very-dark-blue);
`




export const FooterContainer = styled.div`
    position: relative;
    width: min(90%, 1200px);
    margin: 0 auto;
    padding: 3rem 0 2rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 1220px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 5rem 0;
    }
`




export const FooterFirstBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    order: 1;

    @media (min-width: 1220px) {
        align-items: flex-start;
        margin-bottom: 0;
        order: 0;
    }
`



export const FooterLogo = styled.p`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: var(--fw-medium);
    font-size: 30px;
    color: var(--very-light-gray);
    order: 1;

    img {
        width: 20px;
        margin-right: 0.3rem;
    }

    @media (min-width: 1220px) {
        order: 0;
    }
`




export const FooterSocialContainer = styled.div`
    margin-bottom: 1.5rem;

    a {
        font-size: 25px;
        color: var(--very-light-gray);
        margin-right: 1.5rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        :last-of-type {
            margin-right: 0;
            margin-top: 0;
        }

        :hover {
            color: var(--main-orange);
        }

        :focus {
            color: var(--main-orange);
        }
    }

    @media (min-width: 375px) {   
        a {
            font-size: 28px;
            margin-right: 2rem;
        }
    }

    @media (min-width: 1220px) {
        margin-bottom: 0;   

        a {
            font-size: 20px;
            margin-right: 1.5rem;
        }
    }
`





export const FooterSecondBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4rem auto;
    width: 250px;
    
    @media (min-width: 320px) {
        width: 300px;
    }

    @media (min-width: 768px) {
        margin: 5rem auto;
        width: 500px;
    }

    @media (min-width: 1220px) {
        margin: 0 auto;
        width: 300px;
    }
`




export const FooterLinksBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
        background: transparent;
        color: var(--very-light-gray);
        border: none;
        outline: none;
        font-size: 16px;
        letter-spacing: 0.5px;
        margin-bottom: 1.2rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        :last-of-type {
            margin-bottom: 0;
        }

        :hover {
            color: var(--main-orange);
        }

        :focus {
            color: var(--main-orange);
        }
    }
`




export const FooterThirdBox = styled.div`
    width: 250px;
    margin: 0 auto;
    order: -1;

    form {
        text-align: center;
    }

    input[type="text"] {
        height: 40px;
        width: 170px;
        margin-right: 0.5rem;
        padding: 0 0.5rem;
        border: 2px solid transparent;
        outline: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        :focus {
            border: 2px solid #fa5656;
        }
    }

    input[type="submit"] {
        height: 40px;
        width: 60px;
        border: none;
        outline: none;
        border-radius: 50px;
        background-color: var(--main-orange);
        color: var(--very-light-gray);
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        :hover {
            background-color: #f78b70;
        }

        :focus {
            background-color: #f78b70;
        }
    }

    @media (min-width: 375px) {
        width: 350px;

        input[type="text"] {
            width: 250px;
            padding: 0 0.8rem;
        }

        input[type="submit"] {
            width: 70px;
        }
    }

    @media (min-width: 540px) {
        width: 400px;

        input[type="text"] {
            width: 270px;
            padding: 0 1rem;
        }
    }

    @media (min-width: 768px) {
        width: 500px;

        input[type="text"] {
            height: 50px;
            width: 400px;
        }

        input[type="submit"] {
            height: 50px;
            width: 80px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (min-width: 1220px) {
        width: auto;
        margin: 0;
        order: 0;

        input[type="text"] {
            height: 40px;
            width: 270px;
        }

        input[type="submit"] {
            height: 40px;
        }
    }
`




export const FooterMessage = styled.p`
    color: ${({messageColor}) => (messageColor ? "#54fcb6" : "#fa5656")};
    margin: 0.5rem 0 0 0.5rem;
    font-size: 12px;
    user-select: none;
    transition: all 0.2s ease-in-out;
    opacity: ${({showMessage}) => (showMessage ? 1 : 0)};

    @media (min-width: 768px) {
        font-size: 14px;
    }
`




export const CopywrightMessage = styled.p`
    margin-top: 2rem;
    order: 1;
    text-align: center;
    color: var(--dark-grayish-blue);
    font-size: 14px;
    letter-spacing: 0.7px;
    line-height: 1.5;

    @media (min-width: 1220px) {
        position: absolute;
        top: 116px;
        right: 10px;
    }
`