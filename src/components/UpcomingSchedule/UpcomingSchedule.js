import React from 'react';
import { upcomingAppointments } from '../../data/appointments';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import styles from './UpcomingSchedule.module.css';

const UpcomingSchedule = () => (
  <section className={styles.schedule}>
    <h3>The Upcoming Schedule</h3>
    {upcomingAppointments.map(day => (
      <div key={day.day} className={styles.daySection}>
        <div className={styles.dayTitle}>On {day.day}</div>
        <div className={styles.cards}>
          {day.appointments.map(apt => (
            <SimpleAppointmentCard key={apt.title} {...apt} />
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default UpcomingSchedule;
