import Image from "next/image";

import styles from "./index.module.css";
import me from "./images/me.png";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div>
          <Image
            src={me}
            className={styles.me}
            width={120}
            height={120}
            alt="me"
          />
        </div>
        <h1 className={styles.hello}>Hello, I&apos;m Akinobu!</h1>
        <p>Front-end developer based in Tokyo, Japan.</p>
        <p>
          Front-end engineer interested in creating user interfaces. I has
          several years of experience as a back-end engineer. I like to make
          people&apos;s lives better with engineering.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
