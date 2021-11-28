import React, { useState, useEffect } from 'react';
import { TestimonialsWrapper, TestimonailsContainer, TestimonailsCard, TestimonailsCardText } from "./TestimonialsStyle";
import Button from "../Button";

// Swiper.
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import "./style.css";
SwiperCore.use([Pagination]);


function Testimonials() {
    const [ swiperSlidesHelper, setSwiperSlidesHelper ] = useState(1);

    useEffect(() => {
        let changeSlidesNumber = () => {
            if (window.innerWidth < 767) {
                setSwiperSlidesHelper(1);
            } else if (window.innerWidth < 1219) {
                setSwiperSlidesHelper(2);
            } else {
                setSwiperSlidesHelper(3);
            }
        }


        window.addEventListener("load", changeSlidesNumber);
        window.addEventListener("resize", changeSlidesNumber);

        return () => {
            window.removeEventListener("load", changeSlidesNumber);
            window.removeEventListener("resize", changeSlidesNumber);
        }
    });





    return (
        <TestimonialsWrapper>
            <h3>What they’ve said</h3>
            <TestimonailsContainer>
                <Swiper
                pagination={{
                    "clickable": true,
                    "className" : "swiper-pagination-bullet"
                }}
                spaceBetween={50}
                slidesPerView={swiperSlidesHelper}
                >
                    <SwiperSlide>
                        <TestimonailsCard>
                            <img src="./images/avatar-anisha.png" alt="Avatar Anisha"/>
                            <TestimonailsCardText>
                                <h5>Anisha Li</h5>
                                <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                            </TestimonailsCardText>
                        </TestimonailsCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonailsCard>
                            <img src="./images/avatar-ali.png" alt="Avatar Ali"/>
                            <TestimonailsCardText>
                                <h5>Ali Bravo</h5>
                                <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                            </TestimonailsCardText>
                        </TestimonailsCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonailsCard>
                            <img src="./images/avatar-richard.png" alt="Avatar Richard"/>
                            <TestimonailsCardText>
                                <h5>Richard Watts</h5>
                                <p>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                            </TestimonailsCardText>
                        </TestimonailsCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonailsCard>
                            <img src="./images/avatar-shanai.png" alt="Avatar Shanai"/>
                            <TestimonailsCardText>
                                <h5>Shanai Gough</h5>
                                <p>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                            </TestimonailsCardText>
                        </TestimonailsCard>
                    </SwiperSlide>
                </Swiper>
            </TestimonailsContainer>
            <Button bg={"#f25f3a"} textColor="#fafafa" hoverColor="#f78b70" text="Get Started"/>
        </TestimonialsWrapper>
    )
}

export default Testimonials;