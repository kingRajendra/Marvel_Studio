import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Characters from './components/Characters/index';
import Comics from './components/Comics/index';
import Stories from './components/Stories/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>} />
          <Route path="/comics" element={<Comics/>} />
          <Route path="/stories" element={<Stories/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;