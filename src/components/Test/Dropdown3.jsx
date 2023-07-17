import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import s from '../SideBar/SideBar.module.css';
import { nanoid } from 'nanoid';

export default function Dropdown3({ el }) {
  const [activeSThrd, setActiveThrd] = useState(false);

  return (
    <li key={nanoid()} className={s.itemSideBar}>
      <div
        className={s.linkWrapper}
        onClick={() => setActiveThrd(!activeSThrd)}
      >
        <p>{activeSThrd ? <FiChevronUp /> : <FiChevronDown />} </p>
        <NavLink className={s.link} to={'/'}>
          {el[0]}
        </NavLink>
      </div>
      {activeSThrd && (
        <ul className={s.listSideBar}>
          {el[1].map((el, i) => (
            <li key={nanoid()} className={s.itemSideBar}>
              <NavLink className={s.link}>{el}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
