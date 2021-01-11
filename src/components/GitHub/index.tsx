import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import Calendar from 'github-calendar';
import 'github-calendar/dist/github-calendar.css';
import 'github-calendar/dist/github-calendar-responsive.css';

import styles from './index.css';

const GitHub: React.FC = () => {
  const calenderRef = useRef(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    new Calendar(
      calenderRef.current,
      'sakai-akinobu',
      {responsive: true}
    ).then(() => {
      setLoading(true);
    });
  });

  return (
    <div className={styles.container}>
      <h2>GitHub contributions</h2>
      <div className={`transition ${styles.inner}`}>
        <div className={`calendar ${styles.calendar} ${loading ? styles.loaded : ''}`} ref={calenderRef} />
      </div>
    </div>
  );
}

export default GitHub;
