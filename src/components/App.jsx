import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import NewProducts from './newProducts/newProducts';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/" element={<TrendingFilms />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:id" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
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
      <NewProducts />
    </>
  );
};
