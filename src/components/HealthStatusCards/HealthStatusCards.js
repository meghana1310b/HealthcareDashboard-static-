import React from 'react';
import { healthStatusCards } from '../../data/healthData';
import styles from './HealthStatusCards.module.css';

const HealthStatusCards = () => (
  <div className={styles.cards}>
    {healthStatusCards.map(card => (
      <div key={card.label} className={styles.card}>
        <div className={styles.icon}><i className={card.icon}></i></div>
        <div>
          <div className={styles.label}>{card.label}</div>
          <div className={styles.date}>Date: {card.date}</div>
          <div className={styles.statusBar} style={{ background: card.color }}></div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
