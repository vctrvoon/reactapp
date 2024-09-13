import React, {useState, useEffect} from 'react'

import axios from 'axios'

   const searchTitleURL = 'https://www.cheapshark.com/api/1.0/games?title=batman'

const Search = () => { 
    
    const [games, setGames] = useState([]);
    const [gameTitle, setGameTitle] = useState('');

    const searchTitle = async()=>{
        const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5')
        console.log(response);
        setGames(response.data.results);
    }


    const handleChange = (event) => {
        setGameTitle(event.target.value);
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(gameTitle);
        searchTitle(gameTitle)
    }

    useEffect(()=>{
        searchTitle()
    },[])
    
  return (
    <>
        <div className="container" style={{marginTop:"150px"}}>
            <form>
                <div className="input-group mb-3">
                    <input type="text" name="searchTitle" onChange={handleChange} value={gameTitle}
                        className='form-control' placeholder='search movies by title'/>
                    <span>
                        <button className="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
                    </span>
                </div>
            </form>
        </div>
    </>
  )
}

export default Search
