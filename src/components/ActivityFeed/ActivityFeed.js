import React from 'react';
import styles from './ActivityFeed.module.css';

const ActivityFeed = () => (
  <section className={styles.activity}>
    <h3>Activity</h3>
    <div className={styles.summary}>3 appointments on this week</div>
    <div className={styles.barChart}>
      <div className={styles.bar} style={{ height: '60%' }}></div>
      <div className={styles.bar} style={{ height: '80%' }}></div>
      <div className={styles.bar} style={{ height: '40%' }}></div>
      <div className={styles.bar} style={{ height: '100%' }}></div>
      <div className={styles.bar} style={{ height: '70%' }}></div>
    </div>
  </section>
);

export default ActivityFeed;
