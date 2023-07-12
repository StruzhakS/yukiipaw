import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';
// import { Button } from '@material-ui/core';
// import ButtonDrop from 'components/ButtonDrop/ButtonDrop';

const SideBar = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const toggleMenu = () => setIsMenuOpen(isOpen => !isOpen);
  return (
    <div className={s.sideBarBox}>
      {/* <button className={s.closeBtn}>Close</button> */}
      {/* <BrowserRouter> */}
      {/* Routing
      <button onClick={toggleMenu}>123</button>
      <ButtonDrop />
      <ButtonDrop />
      {isMenuOpen && (
        <div>
          <NavLink to="/body" onClick={toggleMenu}>
            Головна
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            Про адвоката
          </NavLink>
        </div>
      )} */}
      {/* <Switch>
          <Route exact={true} path="/body">
            Body
          </Route>
          <Route exact={true} path="/about">
            About
          </Route>
        </Switch> */}
      {/* </BrowserRouter> */}
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
