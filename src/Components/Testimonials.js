import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import star from '../Images/Testimonials/star.svg';
import avatar1 from '../Images/Testimonials/avatar1.jpg';
import avatar3 from '../Images/Testimonials/avatar3.png';
import avatar4 from '../Images/Testimonials/avatar4.png';
import shine from '../Images/Testimonials/shine.svg';

function Testimonials() {
    const testimonialData = [
        {
            id: 1,
            avatar: avatar1,
            name: 'Michael',
            stars: [star, star, star, star, star],
            shine: shine,
            paragraph: 'Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment.',
        },
        {
            id: 2,
            avatar: avatar3,
            name: 'Elena',
            stars: [star, star, star, star, star],
            shine: shine,
            paragraph: 'Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment.',
        },
        {
            id: 3,
            avatar: avatar4,
            name: 'Sarah',
            stars: [star, star, star, star, star],
            shine: shine,
            paragraph: 'Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment.',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <header className='ml-[22px] font-custom font-bold text-6xl mt-[60px]'>
                <h1>Testimonials</h1>
            </header>
            <div id='TestimonialContainer' className='pb-[60px] mt-[60px] ml-[100px] overflow-hidden'>
                <Slider {...settings}>
                    {testimonialData.map((testimonial) => (
                        <div key={testimonial.id}>
                            <div className='w-[430px] h-[270px] bg-[#EDEFEE] mb-[60px] border-black border-[0.5px]'>
                                <div className='flex flex-row py-4 px-4'>
                                    <img src={testimonial.avatar} className='rounded-[50%] w-[100px] h-[100px] border-black border-[0.5px]' />
                                    <div className='flex flex-col flex-wrap font-custom font-semibold text-3xl mt-4 ml-5'>
                                        <h1>{testimonial.name}</h1>
                                        <div className='flex flex-row pt-2 gap-1'>
                                            {testimonial.stars.map((star, index) => (
                                                <img key={index} src={star} className='w-14' />
                                            ))}
                                        </div>
                                    </div>
                                    <img src={testimonial.shine} className='w-[60px] ml-20' />
                                </div>
                                <div className='ml-[22px] text-[#495E57]'>
                                    <p>{testimonial.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}


export default Testimonials;
