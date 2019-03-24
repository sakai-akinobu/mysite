import * as React from 'react';

import styles from './index.scss';
import svgJavaScript from './images/javascript.svg';
import svgTypeScript from './images/typescript.svg';
import svgBabel from './images/babel.svg';
import svgFlow from './images/flow.svg';
import svgReact from './images/react.svg';
import svgRedux from './images/redux.svg';
import svgEsLint from './images/eslint.svg';
import svgPrettier from './images/prettier.svg';
import svgNodeJs from './images/nodejs.svg';
import svgNpm from './images/npm.svg';
import svgMocha from './images/mocha.svg';

export default function TechnologyStack() {
  return (
    <div className={styles.container}>
      <h2>Technology Stack</h2>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={svgJavaScript} />
        <img className={styles.logo} src={svgTypeScript} />
        <img className={styles.logo} src={svgBabel} />
        <img className={styles.logo} src={svgFlow} />
        <img className={styles.logo} src={svgReact} />
        <img className={styles.logo} src={svgRedux} />
      </div>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={svgEsLint} />
        <img className={styles.logo} src={svgPrettier} />
        <img className={styles.logo} src={svgNodeJs} />
        <img className={styles.logo} src={svgNpm} />
        <img className={styles.logo} src={svgMocha} />
      </div>
    </div>
  );
}
