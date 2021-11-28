import React, { useState } from 'react';
import { FooterWrapper, FooterContainer, FooterFirstBox, FooterLogo, FooterSocialContainer, FooterSecondBox, FooterLinksBox, FooterThirdBox, FooterMessage, CopywrightMessage } from "./FooterStyle";
import { FaFacebookSquare, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";


function Footer() {
    const [ formMessage, setFormMessage ] = useState(false);
    const [ displayFormMessage, setDisplayFormMessage ] = useState(false);
    const date = new Date();

    const checkEmail = (event) => {
        event.preventDefault();
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!res.test(event.target.email.value)) {
            setDisplayFormMessage(true);
        } else {
            setFormMessage(true);
            setDisplayFormMessage(true);
            event.target.email.value = "";
        }

        setTimeout(() => {
            setDisplayFormMessage(false);
            setFormMessage(false);
        }, 4000)
    }



    // OnClick link btn message
    const footerLinkMessage = () => {
        alert("This link is just for show.");
    };



    return (
        <FooterWrapper>
            <FooterContainer>

                {/* ========================= First Box ========================= */}
                <FooterFirstBox>
                    <FooterLogo><img src="./images/logo-footer.png" alt="Logo" /> manage</FooterLogo>
                    <FooterSocialContainer>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterest /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </FooterSocialContainer>
                </FooterFirstBox>

                {/* ========================= Second Box ========================= */}
                <FooterSecondBox>
                    <FooterLinksBox>
                        <button onClick={footerLinkMessage}>Home</button>
                        <button onClick={footerLinkMessage}>Pricing</button>
                        <button onClick={footerLinkMessage}>Products</button>
                        <button onClick={footerLinkMessage}>About Us</button>
                    </FooterLinksBox>
                    <FooterLinksBox>
                        <button onClick={footerLinkMessage}>Careers</button>
                        <button onClick={footerLinkMessage}>Community</button>
                        <button onClick={footerLinkMessage}>Privacy Policy</button>
                    </FooterLinksBox>
                </FooterSecondBox>

                {/* ========================= Third Box ========================= */}
                <FooterThirdBox>
                    <form name="form" onSubmit={checkEmail}>
                        <input type="text" name="email" placeholder="Updates in your inbox…" />
                        <input type="submit" value="Go" />
                    </form>
                    <FooterMessage messageColor={formMessage} showMessage={displayFormMessage}>{formMessage ? "Please check your email address." : "Please insert a valid email"}</FooterMessage>
                </FooterThirdBox>

                <CopywrightMessage>&copy; Copyright {date.getFullYear()}. All Rights Reserved</CopywrightMessage>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer;