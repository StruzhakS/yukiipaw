// import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import NewProducts from './newProducts/newProducts';
import BestSellers from './bestSellers/BestSellers';
import Promotions from './Promotions/Promotions';
import AnimalBlock from './AnimalBlock/AnimalBlock';
import Footer from './Footer/Footer';
// import SideBar from './SideBar/SideBar';
// import { useState } from 'react';

export const App = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => setIsMenuOpen(isOpen => !isOpen);
  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '200px',
          backgroundColor: 'black',
        }}
      >
        <h1 style={{ color: 'white' }}>Піклуємось про улюбленців разом</h1>
      </div>
      {/* <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
      <NewProducts />
      <BestSellers />
      <Promotions />
      <AnimalBlock />
      <Footer />
    </>
  );
};
