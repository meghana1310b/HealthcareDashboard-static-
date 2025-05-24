import React from 'react';
import { ReactComponent as AnatomyIcon } from '../../assets/anatomy.svg';
import styles from './AnatomySection.module.css';




const AnatomySection = () => (
  <div className={styles.anatomyWrapper}>
    <AnatomyIcon className={styles.anatomyImg} />
    <div className={styles.pillHeart}>❤️ Healthy Heart</div>
    <div className={styles.pillLeg}>🦵 Healthy Leg</div>
  </div>
);

export default AnatomySection;


