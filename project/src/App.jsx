<<<<<<< HEAD
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Pagination from './components/pagination/Pagination'
import About from './components/about/About'
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Coins from './pages/Coins/Coins'; 
import Exchanges from './pages/exchanges/Exchanges'; 
import About from './pages/about/About';
import Footer from './components/footer/Footer';
>>>>>>> b94158047ba94cc51af3a8269dbb64b597c7f2b4


const App = () => {
  return (
    <>
<<<<<<< HEAD
      {/* <Navbar />
      <Pagination/> */}
      <About/>
=======
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
>>>>>>> b94158047ba94cc51af3a8269dbb64b597c7f2b4
    </>
    
  );
}

export default App;
