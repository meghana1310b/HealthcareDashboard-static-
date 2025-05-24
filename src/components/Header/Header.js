import React from 'react';
import styles from './Header.module.css';
import avatar from '../../assets/avatar.png';
import logo from '../../assets/logo.svg';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoSection}>
      <img src={logo} alt="Healthcare Logo" className={styles.logo} />
      <span className={styles.title}>Healthcare.</span>
    </div>
    <div className={styles.searchSection}>
      <input type="text" placeholder="Search..." className={styles.searchBar} disabled />
      <i className="fa-regular fa-bell"></i>
      <button className={styles.addBtn}><i className="fa-solid fa-plus"></i></button>
      <div className={styles.profile}>
        <img src={avatar} alt="User Avatar" className={styles.avatar} />
        <span className={styles.username}>John Doe</span>
      </div>
    </div>
  </header>
);

export default Header;
