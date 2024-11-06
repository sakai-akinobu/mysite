import Image from "next/image";

import styles from "./styles/index.module.css";
import svgGitHub from "./images/github.svg";
import svgInstagram from "./images/instagram.svg";

const socialLinks: { name: string; svg: string; url: string }[] = [
  { name: "GitHub", svg: svgGitHub, url: "https://github.com/sakai-akinobu" },
  {
    name: "Instagram",
    svg: svgInstagram,
    url: "https://www.instagram.com/sakai.akinobu/",
  },
];

export const Links: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        {socialLinks.map(({ name, svg, url }, index) => (
          <div key={index} className={styles.logo}>
            <a href={url}>
              <div className={styles.svgContainer}>
                <Image className={styles.svg} src={svg} alt={name} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
