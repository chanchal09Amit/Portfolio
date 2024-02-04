"use client"
import React from 'react'
import styles from "./hero.module.css";
import profileImg from "../../../public/images/ProfileImg.jpg"
import Image from 'next/image';
import resume from '../../../public/resume/a.pdf';
const Hero = () => {
   return (
     <div className={styles.heroDiv}>
       <div className={styles.dataDiv}>
         <h3>Hello, I'm Abhinav,</h3>
         <h1>Web Developer</h1>
         <h3>based in Ayodhya.</h3>
         <a
           href={resume}
           className={styles.button}
           download="Abhinav_Pratap_Singh_Resume.pdf"
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
           download="Abhinav_Pratap_Singh_Resume.pdf"
         >
           Resume
         </a>
     </div>
   );
}

export default Hero;