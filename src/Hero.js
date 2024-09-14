import React, {useEffect} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {

  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
     <section id="hero" className="hero section dark-background">

        <div className="container">
        <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>Level Up Your Savings!</h1>
            <p>GameSavvy helps you find the best deals on your favorite games by comparing prices across top retailers. Save money and get the most out of your gaming experience!</p>
            <div className="d-flex">
              <a href="/search" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/hero-img.jpg" className="img-fluid animated" alt=""/>
          </div>
        </div>
        </div>

        </section>{/* /Hero Section */} 
    </>
  )
}

export default Hero
