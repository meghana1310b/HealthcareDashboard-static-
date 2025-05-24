import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigation';
import logo from '../../assets/logo.svg';
<img src={logo} alt="Healthcare Logo" className={styles.logoImg} />


const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.logo}>
      <span className={styles.logoBlue}>Health</span>
      <span className={styles.logoBlack}>care.</span>
    </div>
    <div className={styles.sectionTitle}>General</div>
    <nav>
      <ul>
        {navigationLinks.map((link, idx) => (
          <li
            key={link.label}
            className={`${styles.navItem} ${idx === 0 ? styles.active : ''}`}
          >
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </nav>
    <div className={styles.sectionTitle}>Tools</div>
    <nav>
      <ul>
        {navigationLinks.slice(6).map(link => (
          <li key={link.label} className={styles.navItem}>
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </nav>
    <div className={styles.setting}>
      <i className="fa-solid fa-cog"></i>
      <span>Setting</span>
    </div>
  </aside>
);

export default Sidebar;
