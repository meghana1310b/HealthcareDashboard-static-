import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import styles from './DashboardOverview.module.css';

const DashboardOverview = () => (
  <section className={styles.overview}>
    <AnatomySection />
    <HealthStatusCards />
  </section>
);

export default DashboardOverview;
