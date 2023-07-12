import { useSnapCarousel } from 'react-snap-carousel';
import React from 'react';
import newProductsItem from '../../products.json';

const BestSellers = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Новинки</h2>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          height: '400px',
          overflow: 'auto',
          scrollSnapType: 'x mandatory',
        }}
      >
        {newProductsItem.map((el, i) => (
          <li
            key={i}
            style={{
              fontSize: '24px',
              width: '250px',
              height: '350px',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img src={el.img} alt="descr" width="100px" />
            <p>{el.description}</p>
            <span>{el.price}</span>
          </li>
        ))}
      </ul>
      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;
