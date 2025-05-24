import React from 'react';
import anatomy from '../../assets/anatomy.svg';
import { anatomyIndicators } from '../../data/healthData';
import styles from './AnatomySection.module.css';

const AnatomySection = () => (
  <div className={styles.anatomySection}>
    <img src={anatomy} alt="Human Anatomy" className={styles.anatomyImg} />
    <div className={styles.indicators}>
      {anatomyIndicators.map(ind => (
        <div key={ind.label} className={styles.indicator} style={{ color: ind.color }}>
          <i className={ind.icon}></i>
          <span>{ind.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AnatomySection;
