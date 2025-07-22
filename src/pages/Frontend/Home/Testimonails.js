import React, { useState } from 'react'
import { Col, Image, Row} from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
    {
        id: "0",
        fullName: "Emily Johnson",
        review: "This platform has been a complete game-changer for our organization. It keeps everyone on the same page, improves transparency, and significantly reduces communication overhead. The intuitive interface makes it easy for all departments to collaborate efficiently,",
        designation: "Marketing Manager",
        category: "client",
        photoURL: "https://randomuser.me/api/portraits/women/44.jpg",
        status: "active",
        order: 1,
        star: 4.5
    },
    {
        id: "1",
        fullName: "Michael Lee",
        review: "Our workflow has improved dramatically since implementing this system. It offers robust tools that integrate seamlessly with our existing stack, and the ability to customize workflows has saved our engineering team hours each week. The support team is also incredibly responsive and helpful whenever we have questions or feedback.",
        designation: "Product Lead",
        category: "client",
        photoURL: "https://randomuser.me/api/portraits/men/32.jpg",
        status: "active",
        order: 2,
        star: 4.7
    },
    {
        id: "2",
        fullName: "Ava Smith",
        review: "This tool has simplified our project management beyond expectations. As a designer, I especially appreciate how intuitive and visually clean the UI is. We're able to coordinate across teams without confusion ",
        designation: "UX Designer",
        category: "client",
        photoURL: "https://randomuser.me/api/portraits/women/65.jpg",
        status: "active",
        order: 3,
        star: 5.0
    },
    {
        id: "3",
        fullName: "David Kim",
        review: "Managing operations across departments used to be chaotic, but this platform brought structure and visibility into every process. With automated reminders and centralized task tracking, our error rates have gone down significantly. ",
        designation: "Operations Manager",
        category: "client",
        photoURL: "https://randomuser.me/api/portraits/men/41.jpg",
        status: "active",
        order: 4,
        star: 4.8
    },
    {
        id: "4",
        fullName: "Sophia Martinez",
        review: "As an HR Director, transparency and coordination are vital. This platform helps streamline everything from internal communications to onboarding. ",
        designation: "HR Director",
        category: "client",
        photoURL: "https://randomuser.me/api/portraits/women/12.jpg",
        status: "active",
        order: 5,
        star: 4.6
    },
    {
        id: "5",
        fullName: "Liam Walker",
        review: "We tried several project management tools before this one, and none came close. It’s fast, reliable, and packed with features that actually matter. From detailed user permissions to seamless .",
        designation: "Tech Lead",
        category: "client",
        photoURL: "https://randomuser.me/api/portraits/men/28.jpg",
        status: "active",
        order: 6,
        star: 4.9
    }
];


export default function Testimonails() {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const settings = {
        slidesToShow: 7, slidesToScroll: 1, speed: 500, centerMode: true, infinite: true, autoplay: true, autoplaySpeed: 2000, centerPadding: "60px", arrows: true, dots: false, swipeToSlide: true, focusOnSelect: true,
        beforeChange: (current, next) => {
            setFocusedIndex(next);
        },
        responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, } }, { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1, } }, { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } }, { breakpoint: 320, settings: { slidesToShow: 3, slidesToScroll: 1 } }]
    };
    return (
        <div className='bg-light'>
            <div className="container testimonials-section-home -pt-140 -pb-140">
                <div className='text-center'>
                    <span className="badge bg-info text-white text-uppercase px-3 py-2 fs-5 ">Testimonials</span>
                </div>

                <h1 className='-mb-60 text-center'>What Our Client Says<br className='d-none d-xl-block' /></h1>
                {/* <Row className='container my-5' >
                    <Col xs={24} lg={12} data-aos="fade-right" data-aos-delay="400">
                        <h2 className='fs-1'>What Our Students Says</h2>
                    </Col>
                    <Col xs={24} lg={12} data-aos="fade-left" data-aos-delay="400">
                        <p className='lh-lg'>Our students praise CoDev for its practical, hands-on courses and expert guidance. They find our programs comprehensive and beneficial in advancing their careers.</p>
                    </Col>
                </Row> */}
                <div>
                    <Row className='container my-5 testimonials-card'>
                        <Col xs={{ span: 24 }} md={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }} data-aos="fade-up" data-aos-delay="400">
                            <div className="card shadow mb-5 border-0 py-1 review-card">
                                <div className="card-body d-lg-flex align-items-start review-card--body">
                                    <div className="d-inline me-lg-3">
                                        <Image src={data[focusedIndex]?.photoURL} className='rounded-circle shadow icon-container review-card--image' preview={false} height={100} width={100} alt={data[focusedIndex]?.fullName} />
                                    </div>
                                    <div className="d-inline text-content">
                                        <h3 className="card-title text-capitalize my-2 heroSection-card--title">
                                            {data[focusedIndex]?.fullName}
                                        </h3>
                                        <p className="card-text fw-bold text-success">{data[focusedIndex]?.designation}</p>
                                        <p className="card-text fw-bold text-secondary">{data[focusedIndex]?.review}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }} data-aos="fade-up" data-aos-delay="600">
                            <Slider {...settings} className="review-slick-slider">
                                {data?.map((review, index) => (
                                    <div key={index}>
                                        <div className="slider-image--border m-1 p-1">
                                            <Image src={review.photoURL} className='slider-image' preview={false} alt={review.fullName} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
