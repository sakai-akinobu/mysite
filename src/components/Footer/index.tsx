import * as React from "react";

import styles from "./index.css";
import svgGitHub from "./images/github.svg";
import svgInstagram from "./images/instagram.svg";
import svg500px from "./images/500px.svg";
import svgLastFm from "./images/lastfm.svg";
import svgBlog from "./images/blog.svg";

const socialLinks: { name: string; svg: string; url: string }[] = [
  { name: "GitHub", svg: svgGitHub, url: "https://github.com/sakai-akinobu" },
  {
    name: "Instagram",
    svg: svgInstagram,
    url: "https://www.instagram.com/sakai.akinobu/",
  },
  { name: "500px", svg: svg500px, url: "https://500px.com/nobyu" },
  { name: "Last.fm", svg: svgLastFm, url: "http://www.lastfm.jp/user/nobyu" },
  { name: "Blog", svg: svgBlog, url: "https://blog.akinobusakai.com/" },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {socialLinks.map(({ name, svg, url }, index) => (
            <div key={index} className={styles.logo}>
              <a href={url}>
                <div className={styles.svgContainer}>
                  <img className={styles.svg} src={svg} alt={name} />
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.copyright}>
          &copy;Akinobu Sakai {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
