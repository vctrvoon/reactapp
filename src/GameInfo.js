import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import AOS from "aos";
import "aos/dist/aos.css";


const GameInfo = () => {
   
    let {dealid} = useParams();
    const searchURL = 'https://www.cheapshark.com/api/1.0/deals?id='
    const [gameDetails, setGameDetails] = useState(null);

    const getDeal = async() =>{
        const response = await axios.get(`${searchURL}${encodeURIComponent(dealid)}`)
        console.log(response);
        setGameDetails(response.data.gameInfo);
    }

    console.log(`${searchURL}${encodeURIComponent(dealid)}`)
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
       
    }, []);

  
    console.log(encodeURIComponent(dealid))
    console.log("Test2")

    useEffect(() => {
        console.log("getdeal");
        getDeal()
    }, [] );
    
  return (
    <>
          {/* About Section */}
    <section id="about" className="about section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>fsafdsdf</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src='' className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Metacritics Score:</strong> <span>sdfsdf</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Publisher:</strong> <span>sdfsdf</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Release Date:</strong> <span>sdfsdf</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Retail Price:</strong> <span>$456375</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Sale Price:</strong> <span>dvgsdbsd</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Steam Rating Count:</strong> <span>sdbsdb</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Steam Rating %:</strong> <span>sdbsdb</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Steam Rating Text:</strong> <span>sdbsdb</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>

      </div>

    </section>{/* /About Section */}
    </>
  )
}

export default GameInfo
