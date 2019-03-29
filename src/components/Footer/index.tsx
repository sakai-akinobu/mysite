import * as React from 'react';

import styles from './index.scss';
import svgGitHub from './images/github.svg';
import svgInstagram from './images/instagram.svg';
import svg500px from './images/500px.svg';
import svgLastFm from './images/lastfm.svg';

const socialLinks: {svg: string; url: string}[] = [
  {svg: svgGitHub, url: 'https://github.com/sakai-akinobu'},
  {svg: svgInstagram, url: 'https://www.instagram.com/sakai.akinobu/'},
  {svg: svg500px, url: 'https://500px.com/nobyu'},
  {svg: svgLastFm, url: 'http://www.lastfm.jp/user/nobyu'},
];

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {
            socialLinks.map(({svg, url}, index) => (
              <div key={index} className={styles.logo}>
                <a href={url}>
                  <div className={styles.svgContainer}>
                    <img className={styles.svg} src={svg} />
                  </div>
                </a>
              </div>
            ))
          }
        </div>
        <div className={styles.copyright}>&copy;Akinobu Sakai {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
