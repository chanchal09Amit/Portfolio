"use client"
import React from 'react'
import styles from "./hero.module.css";
import profileImg from "../../../public/images/ProfileImg.jpg"
import Image from 'next/image';
import resume from '../../../public/resume/AMIT_KUMAR_CHANCHAL.pdf';
const Hero = () => {
   return (
     <div className={styles.heroDiv}>
       <div className={styles.dataDiv}>
         <h3>Hello, I'm Amit,</h3>
         <h1>Production Engineer</h1>
         <h3>based in Champaran.</h3>
         <a
           href={resume}
           className={styles.button}
           download="AMIT_KUMAR_CHANCHAL_Resume.pdf"
         >
           Resume
         </a>
       </div>
       <Image
         className={styles.profileImg}
         alt="ProfileImg"
         src={profileImg}
         width={100}
         style={{ height: "auto" }}
         placeholder="blur"
       />
         <a
           href={resume}
           className={styles.buttonM}
           download="AMIT_KUMAR_CHANCHAL_Resume.pdf"
         >
           Resume
         </a>
     </div>
   );
}

export default Hero;
