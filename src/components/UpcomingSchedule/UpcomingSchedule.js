import React from 'react';
import styles from './UpcomingSchedule.module.css';

const schedule = [
  {
    day: 'Thursday',
    items: [
      {
        icon: 'fa-solid fa-check-circle',
        label: 'Health checkup complete',
        time: '09:00',
        color: '#21C87A'
      },
      {
        icon: 'fa-solid fa-eye',
        label: 'Ophthalmologist',
        time: '11:00',
        color: '#3E7BFA'
      }
    ]
  },
  {
    day: 'Saturday',
    items: [
      {
        icon: 'fa-solid fa-heartbeat',
        label: 'Cardiologist',
        time: '13:00',
        color: '#FF6B6B'
      },
      {
        icon: 'fa-solid fa-brain',
        label: 'Neurologist',
        time: '15:00',
        color: '#8F9BB3'
      }
    ]
  }
];

const UpcomingSchedule = () => (
  <section className={styles.scheduleSection}>
    <div className={styles.title}>The Upcoming Schedule</div>
    {schedule.map(day => (
      <div key={day.day}>
        <div className={styles.day}>{`On ${day.day}`}</div>
        {day.items.map(item => (
          <div className={styles.scheduleCard} key={item.label}>
            <i className={item.icon} style={{ color: item.color, fontSize: '1.3em', marginRight: 12 }}></i>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.time}>{item.time}</span>
          </div>
        ))}
      </div>
    ))}
  </section>
);

export default UpcomingSchedule;
