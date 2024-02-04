import React from "react";
import styles from "./page.module.css";
import work1 from "../../../public/images/work1.png";
import work2 from "../../../public/images/work2.png";
import Image from "next/image";

const Work = () => {
  const data = [
    {
      image: work1,
      date: "10-10-1100",
      title: "work1",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
    },
    {
      image: work2,
      date: "20-20-2200",
      title: "work2",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
    },
  ];
  return (
    <div id="work" className={styles.workDiv}>
      <h1>work.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
        tristique quam felis. Id phasellus dui orci vulputate consequat nulla
        proin. Id sit scelerisque neque, proin bibendum diam.
      </p>
      <div className={styles.workData}>
        {data.map((item, index) => (
          <div key={index}>
            <Image
              alt="work"
              placeholder="blur"
              width={550}
              style={{ height: "auto" }}
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
