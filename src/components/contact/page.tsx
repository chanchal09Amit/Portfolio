import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
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
          style={{ width: "60%", height: "auto" }}
        />
        <div className={styles.contactData}>
          <p className={styles.p1}>
            As the pixels settle and the code finds its rhythm, my journey in
            crafting digital wonders unfolds. If you're ready to embark on
            exciting projects together, let's create the extraordinary. Contact
            me at following and let the coding adventure begin!
          </p>
          <a
            style={{ color: "#EB0325" }}
            href="mailto:harshitsinghtil@mail.com"
          >
            E-Mail
          </a>
          <a
            style={{ color: "#EB0325" }}
            href="https://twitter.com/Abhinav28223365"
          >
            Twitter
          </a>
          <a
            style={{ color: "#EB0325" }}
            href="https://www.linkedin.com/in/abhinav-pratap-singh-1a8a57200/"
          >
            Linkedin
          </a>
        </div>
        <ul className={styles.NavSocials}>
          <li>
            <Link
              href="https://twitter.com/Abhinav28223365"
              style={{ color: "#03045E" }}
            >
              <i className="bx bxl-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/abhinav-pratap-singh-1a8a57200/"
              style={{ color: "#03045E" }}
            >
              <i className="bx bxl-linkedin-square"></i>
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "#03045E" }}>
              <i className="bx bxl-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
