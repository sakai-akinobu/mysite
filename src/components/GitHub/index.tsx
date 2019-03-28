import * as React from 'react';
import {useEffect, useRef} from 'react';
import Calendar from 'github-calendar';
import 'github-calendar/dist/github-calendar.css';
import 'github-calendar/dist/github-calendar-responsive.css';

import styles from './index.scss';

export default function GitHub() {
  const calenderRef = useRef(null);
  useEffect(() => {
    new Calendar(calenderRef.current, 'sakai-akinobu', {responsive: true});
  });

  return (
    <div className={styles.container}>
      <h2>GitHub contributions</h2>
      <div className={`transition ${styles.inner}`}>
        <div className={`calendar ${styles.calendar}`} ref={calenderRef} />
      </div>
    </div>
  );
}
