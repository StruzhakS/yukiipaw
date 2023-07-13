import Header from './Header/Header';
import NewProducts from './newProducts/newProducts';
import BestSellers from './bestSellers/BestSellers';
import Promotions from './Promotions/Promotions';
import AnimalBlock from './AnimalBlock/AnimalBlock';
import Footer from './Footer/Footer';
import AnimalsFiltering from './AnimalsFiltering/AnimalsFiltering';

export const App = () => {
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
      <AnimalsFiltering />
      <NewProducts />
      <BestSellers />
      <Promotions />
      <AnimalBlock />
      <Footer />
    </>
  );
};
