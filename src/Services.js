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
    <section id="services" className="services section dark-background">

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
              <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
              <h4><a href="" className="stretched-link">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
              <h4><a href="" className="stretched-link">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-broadcast icon"></i></div>
              <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>{/* End Service Item */}

        </div>

      </div>

    </section>{/* /Services Section */}
    </>
  )
}

export default Services
