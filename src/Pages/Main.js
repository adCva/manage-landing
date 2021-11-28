import React from 'react';
import Nav from '../Components/Nav/Nav';
import Banner from "../Components/Banner/Banner";
import Section from '../Components/Section/Section';
import Testimonials from '../Components/Testimonials/Testimonials';
import Simplify from '../Components/Simplify/Simplify';
import Footer from '../Components/Footer/Footer';


function Main() {
    return (
        <div>
            <header>
                <Nav />
                <Banner />
            </header>
            <main>
                <Section />
                <Testimonials />
                <Simplify />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Main;