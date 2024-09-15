import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* About Section */}
    <section id="about" className="about section dark-background" style={{marginTop:"80px"}}>

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
            Welcome to GameSavvy! We’re here to help you find the best deals on your favorite games. 
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Smart Savings: GameSavvy compares prices from top retailers to help you find the best deals on your favorite games.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>User-Friendly: Our app offers a simple, intuitive interface for easy and quick price comparisons.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Real-Time Updates: Stay informed with the latest deals and discounts, ensuring you always get the most value for your money.</span></li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>Our app compares prices from top retailers to ensure you get the most value for your money. With our user-friendly interface and real-time updates, saving on games has never been easier. Thank you for choosing GameSavvy—where smart gamers save more!</p>
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>

        </div>

      </div>

    </section>{/* /About Section */} 
    </>
  )
}

export default About
