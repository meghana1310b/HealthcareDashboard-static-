import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigation';

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <h2 className={styles.heading}>General</h2>
    <nav>
      <ul>
        {navigationLinks.map(link => (
          <li key={link.label} className={styles.navItem}>
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
