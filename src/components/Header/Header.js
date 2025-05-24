import React from 'react';
import styles from './Header.module.css';
import avatar from '../../assets/avatar.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.searchWrapper}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className={styles.search}
        type="text"
        placeholder="Search"
        disabled
      />
    </div>
    <div className={styles.rightSection}>
      <i className={`fa-regular fa-bell ${styles.bell}`}></i>
      <img src={avatar} alt="User Avatar" className={styles.avatar} />
      <button className={styles.addBtn}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  </header>
);

export default Header;
