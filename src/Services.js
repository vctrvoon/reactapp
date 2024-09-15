import React, {useEffect} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";


const Services = () => {

  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Services Section */}
    <section id="services" className="services section dark-background" style={{marginTop:"80px"}}>

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="row gy-4">

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-activity icon"></i></div>
              <h4><a href="" className="stretched-link">Price Comparison</a></h4>
              <p>Easily compare game prices across multiple retailers to find the best deals.</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
              <h4><a href="" className="stretched-link">Deal Alerts</a></h4>
              <p>Receive notifications for significant discounts and promotions on your favorite games.</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
              <h4><a href="" className="stretched-link">Price Tracking</a></h4>
              <p>Monitor game prices over time and get alerts when prices drop.</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-broadcast icon"></i></div>
              <h4><a href="" className="stretched-link">User Reviews</a></h4>
              <p>Access user reviews and ratings to make informed purchasing decisions.</p>
            </div>
          </div>{/* End Service Item */}

        </div>

      </div>

    </section>{/* /Services Section */}
    </>
  )
}

export default Services
