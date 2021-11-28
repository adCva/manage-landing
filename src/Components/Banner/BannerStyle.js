import styled from "styled-components";



export const BannerWrapper = styled.section`
    width: min(90%, 1200px);
    margin: 2rem auto 0;
    padding-bottom: 5rem;

    @media (min-width: 768px) {
        margin: 3rem auto 3rem;
    }

    @media (min-width: 1220px) {
        margin: 5rem auto 10rem;
        padding-bottom: 0;
    }
`




export const BannerContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: menuEnter 1s ease-in-out forwards;
    

    img {
        width: 100%;
        margin-bottom: 2rem;
    }

    @media (min-width: 500px) {
        img {
            width: 450px;
        }
    }


    @media (min-width: 768px) {
        img {
            width: 550px;
        }
    }

    @media (min-width: 1220px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        img {
            width: 600px;
            margin-bottom: 0;
            order: 1;
        }
    }
`




export const BannerText = styled.div`
    text-align: center;
    padding: 0 2rem;

    h1 {
        font-weight: var(--fw-bold);
        font-size: 27px;
        line-height: 1.2;
    }

    p {
        margin: 1rem 0 2rem;
        color: var(--dark-grayish-blue);
        line-height: 1.5;
    }

    @media (min-width: 411px) {
        h1 {
            font-size: 30px;
        }
    }

    @media (min-width: 500px) {
        width: 410px;
        margin: 0 auto;
        padding: 0;


        h1 {
            font-size: 33px;
        }

        p {
            margin: 2rem 0 3rem;
            font-size: 17px;
        }
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 35px;
        }

        p {
            margin: 2rem 0 3rem;
            font-size: 18px;
        }
    }

    @media (min-width: 1220px) {
        text-align: left;
        width: auto;
        margin: 2rem 0 0;

        h1 {
            font-size: 45px;
            width: 400px;
        }

        p {
            margin: 3rem 0 4rem;
            width: 430px;
        }
    }
`