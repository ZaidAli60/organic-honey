import React from 'react';
import { Link } from 'react-router-dom';
import bee from "assests/bee.png"
export default function Hero() {
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

            <div className="hero-wrapper position-relative overflow-hidden">
                {/* Bee 3: Circling hero */}
                <img src={bee} alt="Bee" className="bee bee3" />

                <div className="container py-5">
                    <div className="row align-items-center">
                        {/* Left Section */}
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

                        {/* Right Section */}
                        <div className="col-md-6 text-center mt-4 mt-md-0 position-relative honey-zone">
                            <img
                                src="https://sweetmielo.like-themes.com/wp-content/uploads/2018/08/slide-2.jpg"
                                alt="Honey"
                                className="img-fluid rounded"
                            />

                            {/* Bee 1: top-right to bottom-left */}
                            <img src={bee} alt="Bee" className="bee bee1" />

                            {/* Bee 2: bottom-left to top-right */}
                            <img src={bee} alt="Bee" className="bee bee2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
