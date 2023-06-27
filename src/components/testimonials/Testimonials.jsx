import React from 'react'
import { testimonials } from '../../data/data'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonials.css'
function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    testimonials.map(({ id, avatar, name, review }) => {
                        return (
                            <SwiperSlide className='testimonial' key={id}>
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar one" />
                                </div>
                                <h5>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials
