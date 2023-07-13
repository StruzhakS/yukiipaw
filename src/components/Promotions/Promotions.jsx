import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link, NavLink } from 'react-router-dom';

const Promotions = () => {
  const itemPromotion = {
    name: 'Повідок-рулетка для улюбленців 5 м вагою до 15 кг з малюнком "Пончики"',
    description:
      'Чудовий повідок довжиною в 5 м, лента оздобленна світловідбивною ниткою, що покращую видимість тваринки в пізній час, зручний в експлуатації карабін. Малюнок знаходиться з обох сторін рулетки, з часом не злазить.',
    productCode: '8124-0070-01',
    oldPrice: ' 560 грн',
    newPrice: '460 грн',
  };

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
  ];

  return (
    <>
      <NavLink style={{ display: 'block', textAlign: 'center' }}>Акції</NavLink>
      <div style={{ display: 'flex' }}>
        <div>
          <ul style={{ width: '200px' }}>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <li key={index}>
                  <img src={slideImage.url} alt="" width="200px" />
                </li>
              ))}
            </Slide>
          </ul>
        </div>
        <div>
          <Link>АКЦІЯ {itemPromotion.name}</Link>
          <p>{itemPromotion.description}</p>
          <p>Код товару: {itemPromotion.productCode}</p>
          <p>
            Стара ціна:<s> {itemPromotion.oldPrice}</s>
          </p>
          <p>Нова ціна: {itemPromotion.newPrice}</p>
        </div>
      </div>
    </>
  );
};

export default Promotions;
