import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import s from '../SideBar/SideBar.module.css';
import Dropdown2 from './Dropdown2';

export default function Dropdown({ heroText, secondaryText }) {
  const [active, setActive] = useState(false);
  const [activeSec, setActiveSec] = useState(false);
  const [activeSThrd, setActiveThrd] = useState(false);

  return (
    <li className={s.itemSideBar}>
      <div className={s.linkWrapper} onClick={() => setActive(!active)}>
        <p>{active ? <FiChevronUp /> : <FiChevronDown />} </p>
        <NavLink className={s.link} to={'/'}>
          {heroText}
        </NavLink>
      </div>
      {active && (
        <ul className={s.listSideBar}>
          {secondaryText.map((el, i) => {
            if (typeof el === 'object') {
              return <Dropdown2 el={el} />;
            }
            return (
              <li key={i} className={s.itemSideBar}>
                <NavLink className={s.link}>{el}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
