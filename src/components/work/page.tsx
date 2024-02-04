import React from "react";
import styles from "./page.module.css";
import work1 from "../../../public/images/work1.png";
import work2 from "../../../public/images/work2.png";
import Image from "next/image";

const Work = () => {
  const data = [
    {
      image: work1,
      date: "10-8-2023",
      title: "Promptopic",
      classname: "styles.work1",
      about:
        "My project, PromptoPic, enhances AI prompts by leveraging data to achieve a 20% efficiency boost. Implemented with OAuth 2.0, it ensures secure and seamless access to elevated functionality.",
    },
    {
      image: work2,
      date: "8-6-2023",
      title: "City-Data",
      classname: "styles.work2",
      about:
        "CityData, my app, seamlessly integrates four APIs to provide comprehensive city information. Offering real-time weather updates and city images, it delivers a holistic experience, enhancing user interaction and engagement.",
    },
  ];
  return (
    <div id="work" className={styles.workDiv}>
      <h1>work.</h1>
      <p>
        I have successfully developed three web projects, showcasing my
        versatility in web development. Employing diverse skills, each project
        reflects my ability to adapt and apply various technologies for
        innovative and effective solutions.
      </p>
      <div className={styles.workData}>
        {data.map((item, index) => (
          <div key={index}>
            <Image
              alt="work"
              placeholder="blur"
              className={item.classname}
              style={{ width: "100%", height: "auto" }}
              src={item.image}
            />

            <h6>{item.date}</h6>
            <h3>{item.title}</h3>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
