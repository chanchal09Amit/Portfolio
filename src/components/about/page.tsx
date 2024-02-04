import React from "react";
import styles from "./page.module.css";

const About = () => {
  const data = [
    {
      period: "2016-2018",
      content:
        "I successfully completed my Class X education at B.P.S.S. Sansthan, Dhanauli, Tarabganj, securing an impressive 83.16% in the UP Board examinations.",
    },
    {
      period: "2018-2020",
      content:
        "I completed my Class XII education at B.P.S.S. Sansthan, located in Dhanauli, Tarabganj, securing an impressive 73.8% in the UP Board examinations and securing 97.90 percentile in JEE-MAINS 2020.",
    },
    {
      period: "2020-Present",
      content:
        "I am currently pursuing my undergraduate degree in Electronics and Communication at NIT Agartala, maintaining a commendable CGPA of 8.30. This academic journey reflects my dedication to excellence and passion for advancing in the field.",
    },
  ];
  return (
    <div id="about" className={styles.aboutDiv}>
      <h1>about.</h1>
      <p>
        Passionate about web and software development, I thrive on transforming
        ideas into efficient, user-centric solutions. With a focus on staying
        updated in the dynamic tech landscape, I bring a problem-solving mindset
        to crafting innovative applications.
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
};

export default About;
