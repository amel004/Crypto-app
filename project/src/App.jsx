import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Coins from './pages/Coins/Coins'; 
import About from './pages/About/About';
import Wallet from './pages/Wallet/Wallet';
import Exchanges from './pages/Exchanges/Exchanges'; 
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
        <Route path='/wallet' element={<Wallet />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
      
      </div>
    </>
    
  );
}

export default App;
