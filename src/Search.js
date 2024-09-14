import React, {useState, useEffect} from 'react'

import axios from 'axios'

import AOS from "aos";
import "aos/dist/aos.css";


const Search = () => { 

  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
   const searchTitleURL = 'https://www.cheapshark.com/api/1.0/games?title='

    
    const [games, setGames] = useState([]);
    const [gameTitle, setGameTitle] = useState('');

    const searchTitle = async()=>{
        const response = await axios.get(`${searchTitleURL}${gameTitle}`)
        console.log(response.data);
        setGames(response.data);
    }


    const handleChange = (event) => {
        setGameTitle(event.target.value);
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(gameTitle);
        searchTitle(gameTitle)
    }

    
  return (
    <>
    <section id="search" className="services section dark-background">
        <div className="container" style={{marginTop:"150px"}} data-aos="fade-up">
            <form>
                <div className="input-group mb-3">
                    <input type="text" name="searchTitle" onChange={handleChange} value={gameTitle}
                        className='form-control' placeholder='search games by title'/>
                    <span>
                        <button className="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
                    </span>
                </div>
                
                <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-up" data-aos-delay="100">           
                        {games.map((gamelist) => {
                            return (
                                <div className="col" key={gamelist.id}>
                                    <div className="card h-100">
                                        <img src={gamelist.thumb} className="card-img-top" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">{gamelist.external}</h5>
                                            <p className="card-text"><a href={`/gameinfo/${gamelist.cheapestDealID}`}>More Info</a></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Cheapest Price: ${gamelist.cheapest}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>    
            </form>
        </div>
    </section>
    </>
  )
}

export default Search
