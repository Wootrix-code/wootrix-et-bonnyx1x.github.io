import React from 'react';
import './App.css';
import {Home} from "./screens/Home";
import {Routes, Route, NavLink} from 'react-router-dom';
import {Ressources} from "./screens/Ressources";
import {Contact} from "./screens/Contact";
import {About} from "./components/About";
import {ResentVideo} from "./screens/ResentVideo";

function App() {
  return (
      <div className='container mt-10'>
          <header className='flex justify-between items-center mb-5'>
              <img className='rounded-2xl w-10' src="./images/logo.jpg" alt=""/>
              <nav className='flex justify-end'>
                  <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/">Home</NavLink><br/>
                  <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/ressources">Ressources</NavLink><br/>
                  <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/contact">Contact</NavLink><br/>
                  <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/resentvideo">Nos vidéo Resente</NavLink>
              </nav>
          </header>
          <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/ressources" element={ <Ressources /> }/>
              <Route path="/contact" element={ <Contact/> }/>
              <Route path="/resentvideo" element={ <ResentVideo/> }/>
          </Routes>
      </div>
  );
}

export default App;
