import React, { useState, useEffect, useRef } from 'react';
import { NavWrapper, NavContainer, OpenBtn, NavMenu, CloseBtn, NavList, NavLink, BigBtn } from "./NavStyle";
import Button from "../Button";



function Nav() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const mobileMenuRef = useRef();


    // Open & close mobile menu.
    const openMobileMenu = () => {
        setIsMenuOpen(true);
    }

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    }



    // OnClick link btn message
    const linkMessage = () => {
        alert("This link is just for show.");
        setIsMenuOpen(false);
    };




    // Close mobile menu on outside click.
    useEffect(() => {
        let closeOnOutsideClick = (event) => {
            if (isMenuOpen === true && !mobileMenuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("click", closeOnOutsideClick);

        return () => {
            document.removeEventListener("click", closeOnOutsideClick);
        }
    });




    
    return (
        <NavWrapper>
            <NavContainer>
                <img src="./images/logo.svg" alt="Page Logo" />
                <OpenBtn onClick={openMobileMenu} isVisible={isMenuOpen} src="./images/icon-hamburger.svg" alt="Open Mobile Menu" />
                <NavMenu isOpen={isMenuOpen}>
                    <CloseBtn onClick={closeMobileMenu} isVisible={isMenuOpen} src="./images/icon-close.svg" alt="Close Mobile Menu"/>
                    <NavList ref={mobileMenuRef}>
                        <NavLink onClick={linkMessage}>Pricing</NavLink>
                        <NavLink onClick={linkMessage}>Product</NavLink>
                        <NavLink onClick={linkMessage}>About Us</NavLink>
                        <NavLink onClick={linkMessage}>Careers</NavLink>
                        <NavLink onClick={linkMessage}>Community</NavLink>
                    </NavList>
                </NavMenu>
                <BigBtn>
                    <Button bg={"#f25f3a"} textColor="#fafafa" hoverColor="#f78b70" text="Get Started"/>
                </BigBtn>
            </NavContainer>
        </NavWrapper>
    )
}

export default Nav;