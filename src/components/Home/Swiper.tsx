import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomerReviewCard } from './CustomerReviewCard';

export const Swipers = () => {
    return (
        <div className='md:w-4/5 w-11/12 mx-auto'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                // ✅ Responsive Slides Per View
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
            >
                <SwiperSlide className='mb-8'><CustomerReviewCard></CustomerReviewCard></SwiperSlide>
                <SwiperSlide className='mb-8'><CustomerReviewCard></CustomerReviewCard></SwiperSlide>
                <SwiperSlide className='mb-8'><CustomerReviewCard></CustomerReviewCard></SwiperSlide>
                <SwiperSlide className='mb-8'><CustomerReviewCard></CustomerReviewCard></SwiperSlide>
                <SwiperSlide className='mb-8'><CustomerReviewCard></CustomerReviewCard></SwiperSlide>
                <SwiperSlide className='mb-8'><CustomerReviewCard></CustomerReviewCard></SwiperSlide>
                <SwiperSlide className='mb-8'><CustomerReviewCard></CustomerReviewCard></SwiperSlide>
            </Swiper>
        </div>
    );
}
