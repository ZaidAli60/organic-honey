import React from 'react';
import { Link } from 'react-router-dom';
import bee from "assests/bee.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Hero() {

    const slides = [
        {
            title1: 'Natural',
            title2: 'Honey',
            title3: 'and Beekeeping',
            description: '100% organic, sustainable, and sweet honey straight from our bees.',
            image: 'https://sweetmielo.like-themes.com/wp-content/uploads/2017/09/slider-image-1.png',
        },
        {
            title1: 'Premium',
            title2: 'Dry Fruits',
            title3: 'Handpicked For You',
            description: 'Fresh, crunchy, and full of nutrients. Organic dry fruits for your health.',
            image: 'https://media.istockphoto.com/id/508859187/photo/assorted-mixed-nuts.jpg?s=612x612&w=0&k=20&c=xoTcMSvkqy9xUpnRdL0PvSzh4gx0tt1pvQO3cWXiWTk=',
        },
        {
            title1: 'Cold Pressed',
            title2: 'Organic Oil',
            title3: 'Pure & Natural',
            description: 'Extracted with care to retain nutrients. Perfect for cooking and skincare.',
            image: 'https://media.istockphoto.com/id/1960152719/photo/various-vegetable-and-seed-oil-in-bottles-on-a-bright-background.jpg?s=612x612&w=0&k=20&c=aunny2o2Z6vsrLQGbN7o-RlFQicZUrlLDa-D_tvtI4s=',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //         },
        //     },
        // ],
    };

    return (
        <>
            {/* <div className="container about-section-home -pt-140 -pb-140">
                <div className="row">
                    <div className="col-lg-6 left-content" data-aos="fade-right">
                        <img src={leftPic} alt="Video" className='img-fluid main-img' />
                    </div>
                    <div className="col-lg-6 right-content" data-aos="fade-left" data-aos-delay="200">
                    </div>
                </div>
            </div> */}

            {/* <div className="hero-wrapper position-relative overflow-hidden">
               
                <img src={bee} alt="Bee" className="bee bee3" />

                <div className="container py-5">
                    <div className="row align-items-center">
                       
                        <div className="col-md-6 text-center text-md-start">
                            <h1 className="fw-bold display-5">
                                <span className="text-warning">Natural</span> Honey <br />
                                <span className="text-dark">and Beekeeping</span>
                            </h1>
                            <p className="text-muted mt-3">
                                100% organic, sustainable, and sweet honey straight from our bees.
                            </p>
                            <button className="btn btn-warning px-4 py-2 mt-4 rounded-pill text-white fw-semibold">
                                Buy Now
                            </button>
                        </div>

                  
                        <div className="col-md-6 text-center mt-4 mt-md-0 position-relative honey-zone">
                            <img
                                src="https://sweetmielo.like-themes.com/wp-content/uploads/2018/08/slide-2.jpg"
                                alt="Honey"
                                className="img-fluid rounded"
                            />

                         
                            <img src={bee} alt="Bee" className="bee bee1" />

                           
                            <img src={bee} alt="Bee" className="bee bee2" />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container my-5 ">
                <Slider {...settings}>
                    {slides.map((item, index) => (
                        <div key={index} className="slider-slide p-4">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center text-md-start">
                                    <h1 className="fw-bold display-5">
                                        <span className="text-primary">{item.title1}</span> {item.title2} <br />
                                        <span className="text-dark">{item.title3}</span>
                                    </h1>
                                    <p className="text-muted mt-3">{item.description}</p>
                                    <button className="btn btn-primary px-4 py-2 mt-4 rounded-pill text-white fw-semibold">
                                        Buy Now
                                    </button>
                                </div>
                                <div className="col-md-6 text-center mt-4 mt-md-0 position-relative honey-zone">
                                    <img src={item.image} alt="Product" className="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
