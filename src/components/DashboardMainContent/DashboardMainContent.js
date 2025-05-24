import React from 'react';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import styles from './DashboardMainContent.module.css';

const DashboardMainContent = () => (
  <main className={styles.main}>
    <div className={styles.topRow}>
      <DashboardOverview />
      <CalendarView />
    </div>
    <div className={styles.bottomRow}>
      <UpcomingSchedule />
      <ActivityFeed />
    </div>
  </main>
);

export default DashboardMainContent;
