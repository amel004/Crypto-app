import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Coins from './pages/Coins/Coins'; 
import Exchanges from './pages/exchanges/Exchanges'; 
import About from './pages/about/About';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      </div>
    </>
    
  );
}

export default App;
