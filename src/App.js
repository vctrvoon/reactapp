
import React, {useEffect} from "react";
import NavigationBar from "./NavigationBar";
import Hero from "./Hero";
import About from "./About"
import Services from "./Services";
import Team from "./Team";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Search from "./Search";
import GameInfo from "./GameInfo";


function App() {



  
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/search" element={<Search />} />
        <Route path="/gameinfo/:id" element={<GameInfo />} />
      </Routes>
    </div>
  );
}

export default App;
