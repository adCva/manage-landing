import styled from "styled-components";




export const NavWrapper = styled.nav`
    width: min(90%, 1200px);
    margin: 0 auto;
`




export const NavContainer = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`




export const OpenBtn = styled.img`
    display: ${({isVisible}) => (isVisible ? "none" : "inline-block")};
    @media (min-width: 768px) {
        display: none;
    }
`




export const CloseBtn = styled.img`
    display: ${({isVisible}) => (isVisible ? "inline-block" : "none")};
    position: absolute;
    top: 32px;
    right: 6%;

    @media (min-width: 768px) {
        display: none;
    }
`




export const NavMenu = styled.div`
    display: ${({isOpen}) => (isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: flex-start;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    animation: menuEnter 0.2s ease-in-out forwards;

    @media (min-width: 768px) {
        position: initial;
        display: flex;
        background: transparent;
    }
`




export const NavList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--very-light-gray);
    padding: 2rem 0;
    margin-top: 8rem;
    border-radius: 10px;
    width: 80%;

    @media (orientation: landscape) {
        margin-top: 5rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        margin-top: 0;
        width: 100%;
        background-color: transparent;
    }
`




export const NavLink = styled.button`
    background: transparent;
    border: none;
    outline: none;
    font-weight: var(--fw-medium);
    margin-bottom: 2rem;
    cursor: pointer;
    transition: var(--transition);
    :last-of-type {
        margin-bottom: 0;
        margin-right: 0;
    }

    :hover {
        color: var(--dark-grayish-blue);
    }

    :focus {
        color: var(--dark-grayish-blue);
    }

    @media (orientation: landscape) {
        margin-bottom: 1.3rem;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 1rem;
        font-size: 15px;
    }

    @media (min-width: 1000px) {
        margin-bottom: 0;
        margin-right: 2rem;
    }
`




export const BigBtn = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: inline-block;
    }
`