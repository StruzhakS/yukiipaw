import React from 'react';
import s from './Header.module.css';
import yukkiLogo from '../../images/yukki-logo.jpg';
import searchIcon from '../../images/Screenshot_17.jpg';
const Header = () => {
  return (
    <div className={s.headerBox}>
      <img src={yukkiLogo} alt="yukki logo" width="48" height="48" />
      <h2 className={s.title}>YukiPaw Зоомагазин</h2>
      <div className={s.searchWrapper}>
        <div className={s.inputHolder}>
          <input
            type="text"
            className={s.searchInput}
            placeholder="Type to search"
          />
          <button
            className={s.searchIcon}
            style={{
              // padding: '0px',
              // margin: '0',
              width: '24px',
              // backgroundColor: 'black',
              // outlineColor: 'black',
            }}
            onClick={() => {}}
          >
            <img
              src={searchIcon}
              alt=""
              style={{
                // padding: '0px',
                // margin: '0',
                width: '24px',
              }}
            />
          </button>
        </div>
        <span className={s.close} onClick={() => {}}></span>
      </div>
    </div>
  );
};

export default Header;
