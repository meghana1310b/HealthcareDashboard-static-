import React from 'react';
import styles from './ActivityFeed.module.css';

const ActivityFeed = () => (
  <section className={styles.activity}>
    <h3>Activity</h3>
    <div className={styles.summary}>3 appointment on this week</div>
    <div className={styles.barChart}>
      {/* Render 7 bars for Mon–Sun */}
      {['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'].map((day, i) => (
        <div key={day} className={styles.barWrapper}>
          <div className={styles.bar} style={{ height: `${40 + i*8}px` }}></div>
          <span className={styles.day}>{day}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ActivityFeed;
