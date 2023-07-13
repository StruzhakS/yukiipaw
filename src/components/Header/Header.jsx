import React, { useState } from 'react';
import s from './Header.module.css';
import SideBar from 'components/SideBar/SideBar';
import Modal from 'react-modal';
import { FiSearch } from 'react-icons/fi';

Modal.setAppElement('#root');

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={s.headerBox}>
        <button
          onClick={modalIsOpen ? closeModal : openModal}
          className={s.btnToggle}
        ></button>
        <h2 className={s.title}>YukiPaw Зоомагазин</h2>
        <div className={s.searchWrapper}>
          <div className={s.inputHolder}>
            <button className={s.searchBackbtn} onClick={() => {}}>
              Back
            </button>
            <input
              type="text"
              className={s.searchInput}
              placeholder="Type to search"
            />
            <button className={s.searchIcon} onClick={() => {}}>
              <FiSearch />
            </button>
          </div>
          <span className={s.close} onClick={() => {}}></span>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className={s.sideBarBox}
        >
          <SideBar closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
};

export default Header;
