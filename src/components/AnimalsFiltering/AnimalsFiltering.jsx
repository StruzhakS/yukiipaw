import React from 'react';
import { NavLink } from 'react-router-dom';
import catImg from '../../images/AnimalsFiltering/cat-2.svg';
import dogImg from '../../images/AnimalsFiltering/dog-2.svg';
import reptiliaImg from '../../images/AnimalsFiltering/reptilia-2.svg';
import birdImg from '../../images/AnimalsFiltering/bird-2.svg';
import fishImg from '../../images/AnimalsFiltering/fish-2.svg';
import rodentImg from '../../images/AnimalsFiltering/mouse-2.svg';
import s from './AnimalsFiltering.module.css';

const AnimalsFiltering = () => {
  return (
    <ul className={s.listAnimal}>
      <li className={s.listItem}>
        <NavLink to={'/cat'}>
          <img src={catImg} alt="cat" width="100px" />
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink to={'/dog'}>
          <img src={dogImg} alt="dog" width="100px" />
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink to={'/bird'}>
          <img src={birdImg} alt="bird" width="100px" />
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink to={'/fish'}>
          <img src={fishImg} alt="fish" width="100px" />
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink to={'/rodent'}>
          <img src={rodentImg} alt="cat" width="100px" />
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink to={'/reptilia'}>
          <img src={reptiliaImg} alt="cat" width="100px" />
        </NavLink>
      </li>
    </ul>
  );
};

export default AnimalsFiltering;
