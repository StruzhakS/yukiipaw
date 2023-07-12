/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import picture from '../../images/qr-dog.jpg';
const AnimalBlock = () => {
  return (
    <>
      <div>
        <h2>Animal ID - Захист і Догляд</h2>
        <img src={picture} alt="dog qr" width="100%" />
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rjiPvJx3o0I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default AnimalBlock;
