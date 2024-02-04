import React from 'react';
import styles from "./page.module.css";

const About = () => {
    const data = [
      {
        period: "2014-2018",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
      },
      {
        period: "2018-2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
      },
      {
        period: "2020-Present",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
      },
    ];
  return (
    <div id="about" className={styles.aboutDiv}>
      <h1>about.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
        tristique quam felis. Id phasellus dui orci vulputate consequat nulla
        proin. Id sit scelerisque neque, proin bibendum diam.
      </p>
      <div className={styles.aboutData}>
        {data.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.period}</li>
            </ul>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About