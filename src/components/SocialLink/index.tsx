import * as React from 'react';

import styles from './index.scss';
import svgGitHub from './images/github.svg';
import svgInstagram from './images/instagram.svg';
import svg500px from './images/500px.svg';
import svgLastFm from './images/lastfm.svg';

export default function SocialLink() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={svgGitHub} />
        <img className={styles.logo} src={svgInstagram} />
        <img className={styles.logo} src={svg500px} />
        <img className={styles.logo} src={svgLastFm} />
      </div>
    </div>
  );
}
