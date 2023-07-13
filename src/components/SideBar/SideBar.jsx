import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

const SideBar = ({ closeModal }) => {
  return (
    <div className={s.sideBarBox} id="main">
      <button onClick={closeModal}>Close</button>
      <ul>
        <li>
          <NavLink className={s.link} to={'/'}>
            Головна сторінка
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Ласощі
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Харчування
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Амуніція
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Комфорт
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Гігієна
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Здоров
          </NavLink>
          'я
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            НАмордники
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Грумінг
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Адресники
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to={'/'}>
            Акваріумістика
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
