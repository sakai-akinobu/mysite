import * as React from 'react';

import AboutMe from '../AboutMe';
import TechnologyStack from '../TechnologyStack';
import SocialLink from '../SocialLink';
import styles from './index.scss';

export default function App() {
  return (
    <div className={styles.container}>
      <AboutMe />
      <TechnologyStack />
      <SocialLink />
    </div>
  );
}
