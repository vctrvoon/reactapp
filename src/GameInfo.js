import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import AOS from "aos";
import "aos/dist/aos.css";


const GameInfo = () => {
   
    let {dealid} = useParams();
    const searchURL = 'https://www.cheapshark.com/api/1.0/deals?id='
    const [gameDetails, setGameDetails] = useState([]);

    const getDeal = async() =>{
        const response = await axios.get(`${searchURL}${encodeURIComponent(dealid)}`)
        console.log(response);
        //setGameDetails(response);
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
        
    </>
  )
}

export default GameInfo
