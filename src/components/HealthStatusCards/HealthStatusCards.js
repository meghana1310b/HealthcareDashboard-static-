import React from 'react';
import { healthStatusCards } from '../../data/healthData';
import styles from './HealthStatusCards.module.css';

const HealthStatusCards = () => (
  <div className={styles.cards}>
    {healthStatusCards.map(card => (
      <div key={card.label} className={styles.card}>
        <div className={styles.icon} style={{ color: card.color }}>
          <i className={card.icon}></i>
        </div>
        <div>
          <div className={styles.label}>{card.label}</div>
          <div className={styles.date}>{card.date}</div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
