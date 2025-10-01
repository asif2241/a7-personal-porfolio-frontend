import React from 'react'
// import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CustomerReviewCard, IReviewCard } from './CustomerReviewCard';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';


export const customerReviews: IReviewCard[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        companyAndPosition: "Product Manager at TechNova Inc.",
        feedback:
            "Working with this developer was a fantastic experience. From initial discussion to deployment, everything was handled professionally. The attention to performance optimization and responsiveness truly stood out. Highly recommend for any full-stack project.",
        image: "https://i.ibb.co.com/zVXbn32z/Screenshot-81.png"
    },
    {
        id: "2",
        name: "James Lee",
        companyAndPosition: "Lead Developer at PixelSoft",
        feedback:
            "Clean code, excellent communication, and timely delivery. The admin dashboard built for our internal team exceeded expectations in both usability and performance. Definitely someone who understands real-world scalability challenges.",
        image: "https://i.ibb.co.com/vvcQzb23/ptocrop.png"
    },
    {
        id: "3",
        name: "Emily Chen",
        companyAndPosition: "Marketing Director at Bright Solutions",
        feedback:
            "The blog management system is exactly what we needed. It's simple, elegant, and user-friendly. I was particularly impressed by the use of modern tools like Next.js and Prisma which made content updates seamless for our team.",
        image: "https://i.ibb.co.com/vCg1qFdR/programmer.png"
    },
    {
        id: "4",
        name: "Michael Rodriguez",
        companyAndPosition: "UI/UX Designer at NextWave",
        feedback:
            "A true eye for design and user experience. Every component was well thought out, from spacing to typography. The animations added subtle charm without overloading the site. I'd gladly collaborate on future design-heavy builds.",
        image: "https://i.ibb.co.com/zVXbn32z/Screenshot-81.png"
    },
    {
        id: "5",
        name: "Ayesha Rahman",
        companyAndPosition: "Freelancer at FreelanceHub",
        feedback:
            "The portfolio site is not just beautiful, it’s functional. Loved the project filtering system and the way each blog is presented. The use of authentication and role management was a nice touch even for a personal portfolio.",
        image: "https://i.ibb.co.com/vvcQzb23/ptocrop.png"
    },
    {
        id: "6",
        name: "Daniel Kim",
        companyAndPosition: "CTO at OrbitTech",
        feedback:
            "We've worked with many developers, but few show this level of consistency and quality. From robust backend APIs to an intuitive frontend layout, everything was delivered with excellence. The documentation was also very helpful.",
        image: "https://i.ibb.co.com/vCg1qFdR/programmer.png"
    },

];



export const Swipers = () => {
    return (
        <div className='md:w-4/5 w-11/12 mx-auto my-5'>
            {/* text content */}
            <div className='text-center mb-2'>
                <h3 className='font-extrabold text-4xl text-gray-800'>Proof of Impact: What Clients Are <br />Saying</h3>
                <p className='text-lg text-gray-700 py-5'>The best way to measure a developer is by the success of their projects. Read how my end-to-end development solutions have helped businesses and individuals achieve their goals, from concept and design to deployment and maintenance.</p>
            </div>

            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
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

                {
                    customerReviews.map((review: IReviewCard) => (
                        <SwiperSlide key={review.id} className='mb-8'><CustomerReviewCard {...review}></CustomerReviewCard></SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}
