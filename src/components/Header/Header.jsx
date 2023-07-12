import React, { useState } from 'react';
import s from './Header.module.css';
import yukkiLogo from '../../images/yukki-logo.jpg';
import searchIcon from '../../images/search.jpg';
import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import SideBar from 'components/SideBar/SideBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(isOpen => !isOpen);
  console.log(isMenuOpen);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <>
      <div className={s.headerBox}>
        {/* <Button
        style={{ color: 'white' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
        <Button onClick={toggleMenu}>
          <img src={yukkiLogo} alt="yukki logo" width="48" height="48" />
        </Button>

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
        {isMenuOpen ? <SideBar /> : ''}
      </div>
    </>
  );
};

export default Header;
