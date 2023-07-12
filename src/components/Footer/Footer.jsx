import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer}>
      <h2 className={s.footerTitle}>YukiPaw</h2>
      <div>
        <p>Для зв'язку з нами</p>
        <NavLink to={'https://t.me/yukipaw17'} target="_blank">
          https://t.me/yukipaw17
        </NavLink>
        <p>+38 (098) 555-44-33</p>
        <p>м. Ужгород</p>
      </div>
    </div>
  );
};

export default Footer;
