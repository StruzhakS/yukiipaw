import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import s from '../SideBar/SideBar.module.css';
import Dropdown3 from './Dropdown3';

export default function Dropdown2({ el }) {
  const [activeSec, setActiveSec] = useState(false);

  return (
    <li className={s.itemSideBar}>
      <div className={s.linkWrapper} onClick={() => setActiveSec(!activeSec)}>
        <p>{activeSec ? <FiChevronUp /> : <FiChevronDown />} </p>
        <NavLink className={s.link} to={'/'}>
          {el[0]}
        </NavLink>
      </div>
      {activeSec && (
        <ul className={s.listSideBar}>
          {el[1].map((el, i) => {
            if (typeof el === 'object') {
              return <Dropdown3 el={el} />;
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
