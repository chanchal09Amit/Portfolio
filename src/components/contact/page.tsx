import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import contact from "../../../public/images/contact.png";
const Contact = () => {
    return (
      <div className={styles.main}>
        <h1>contact.</h1>
        <div className={styles.contactDiv}>
          <Image
            alt="contact"
            src={contact}
            placeholder="blur"
            style={{ height: "auto" }}
            width={450}
          />
          <div className={styles.contactData}>
            <p className={styles.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </p>
            <p>johndoe@mail.com</p>
            <p> twitter.com/johndoe</p>
            <p> linkdin.com/johndoe</p>
          </div>
        </div>
      </div>
    );
}

export default Contact