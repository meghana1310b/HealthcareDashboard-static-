import React from 'react';
import { calendarAppointments } from '../../data/calendar';
import styles from './CalendarView.module.css';

const CalendarView = () => (
  <section className={styles.calendarSection}>
    <div className={styles.header}>
      <span>October 2021</span>
      <i className="fa-solid fa-chevron-down"></i>
    </div>
    <div className={styles.calendarGrid}>
      {/* Render a static calendar grid here */}
      {/* For brevity, not a full calendar implementation */}
      {calendarAppointments.map(item => (
        <div key={item.date} className={styles.dayCell}>
          <span className={styles.dayDate}>{item.date.split('-')[2]}</span>
          <div className={styles.times}>
            {item.times.map(time => (
              <span key={time} className={styles.time}>{time}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className={styles.appointmentCards}>
      <div className={styles.appointmentCard}>Dentist - 11:00</div>
      <div className={styles.appointmentCard}>Physiotherapy - 15:00</div>
    </div>
  </section>
);

export default CalendarView;
