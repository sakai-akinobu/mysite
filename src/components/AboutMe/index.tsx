import Image from "next/image";

import styles from "./index.module.css";
import me from "./images/me.png";

export const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src={me} className={styles.me} width={100} height={100} alt="me" />
      <h1 className={styles.hello}>Hi, I&apos;m Nob</h1>
      <p className={styles.introduction}>
        Software Engineer, Creating useful Web Applications and user-friendly
        Interfaces.
        <br />
        All my abilities are for someone else.
      </p>
    </div>
  );
};
