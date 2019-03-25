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
import svgJest from './images/jest.svg';

const technologies: {path: string; name: string}[] = [
  {path: svgJavaScript, name: 'JavaScript'},
  {path: svgTypeScript, name: 'TypeScript'},
  {path: svgBabel, name: 'Babel'},
  {path: svgFlow, name: 'Flow'},
  {path: svgReact, name: 'React'},
  {path: svgRedux, name: 'Redux'},
  {path: svgEsLint, name: 'ESLint'},
  {path: svgPrettier, name: 'Prettier'},
  {path: svgJest, name: 'Jest'},
  {path: svgNodeJs, name: 'Node.js'},
  {path: svgNpm, name: 'npm'},
];

export default function TechnologyStack() {
  return (
    <section className={styles.container}>
      <p className={styles.description}>
        The following technologies are commonly I used recently.
        I especially like React and TypeScript.
      </p>
      <div className={styles.logoContainer}>
        {
          technologies.map((technology, index) => (
            <div key={index} className={styles.logo}>
              <div className={styles.svgContainer}>
                <img className={styles.svg} src={technology.path} />
              </div>
              <div className={styles.name}>{technology.name}</div>
            </div>
          ))
        }
      </div>
    </section>
  );
}
