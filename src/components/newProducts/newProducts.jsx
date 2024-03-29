import { useSnapCarousel } from 'react-snap-carousel';
import React from 'react';
import newProductsItem from '../../products.json';

import s from './newProduct.module.css';
const NewProducts = () => {
  const { scrollRef, pages, activePageIndex, goTo } = useSnapCarousel();
  return (
    <div className={s.newProductsWrapper}>
      <h2 style={{ textAlign: 'center' }}>Новинки</h2>
      <ul
        ref={scrollRef}
        className={s.listNewProducts}
        style={{
          display: 'flex',
          height: '370px',
          width: '100%',
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100px',
          margin: '0 auto',
        }}
      >
        <ul style={{ display: 'flex', listStyle: 'none', gap: '16px' }}>
          {pages.map((_, i) => (
            <li key={i}>
              <button
                style={
                  i === activePageIndex
                    ? {
                        opacity: 0.4,
                        backgroundColor: 'orange',
                        height: '16px',
                        borderRadius: '50%',
                        borderColor: 'transparent',
                        outlineColor: 'transparent',
                      }
                    : {
                        backgroundColor: 'orange',
                        height: '16px',
                        borderRadius: '50%',
                        borderColor: 'transparent',
                        outlineColor: 'transparent',
                      }
                }
                onClick={() => goTo(i)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewProducts;
