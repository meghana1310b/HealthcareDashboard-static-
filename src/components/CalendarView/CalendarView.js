import React from 'react';
import styles from './CalendarView.module.css';

const calendarDays = [
  { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5, active: true, times: ['09:00', '11:00'] },
  { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12, active: true, times: ['13:00'] },
  { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18, active: true, times: ['15:00'] },
  { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }
];

const appointments = [
  {
    type: 'Dentist',
    time: '09:00–11:00',
    doctor: 'Dr. Cameron Williamson',
    colorClass: 'dentist'
  },
  {
    type: 'Physiotherapy Appointment',
    time: '11:00–12:00',
    doctor: 'Dr. Kevin Djones',
    colorClass: 'physio'
  }
];

const CalendarView = () => (
  <section className={styles.calendarSection}>
    <div className={styles.header}>
      <span>October 2021</span>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
    <div className={styles.calendarGrid}>
      {calendarDays.map(({ day, active, times }) => (
        <div key={day} className={`${styles.dayCell} ${active ? styles.activeDay : ''}`}>
          <span className={styles.dayDate}>{day}</span>
          {active && times && (
            <div className={styles.times}>
              {times.map(time => (
                <span key={time} className={styles.time}>{time}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.appointmentCards}>
      {appointments.map(app => (
        <div key={app.type} className={`${styles.appointmentCard} ${styles[app.colorClass]}`}>
          <div className={styles.appointmentType}>{app.type}</div>
          <div className={styles.appointmentTime}>{app.time}</div>
          <div className={styles.appointmentDoctor}>{app.doctor}</div>
        </div>
      ))}
    </div>
  </section>
);

export default CalendarView;
