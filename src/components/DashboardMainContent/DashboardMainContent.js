import React from 'react';
import styles from './DashboardMainContent.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';

const DashboardMainContent = () => (
  <div className={styles.main}>
    {/* Left Panel */}
    <div className={styles.leftPanel}>
      <AnatomySection />
      <HealthStatusCards />
      <ActivityFeed />
    </div>
    {/* Right Panel */}
    <div className={styles.rightPanel}>
      <CalendarView />
      <UpcomingSchedule />
    </div>
  </div>
);

export default DashboardMainContent;
