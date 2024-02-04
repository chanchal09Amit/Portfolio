"use client"
import React from 'react'
import styles from "./hero.module.css";
import profileImg from "../../../public/images/ProfileImg.jpg"
import Image from 'next/image';
const Hero = () => {
  const downloadPDF= ()=> {
    const pdfFilePath =
      "https://drive.google.com/file/d/1lNUB57elVar3H0nU98dKCR34GL9gbCMa/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "Abhinav_Pratap_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className={styles.heroDiv}>
      <div className={styles.dataDiv}>
        <h3>Hello, I’m John,</h3>
        <h1>Product Designer</h1>
     <h3>based in Netherland.</h3>
        <button onClick={downloadPDF}>Resume</button>
      </div>

      <Image
        className={styles.profileImg}
        alt="ProfileImg"
        src={profileImg}
        width={300}
        style={{ height: "auto" }}
        placeholder="blur"
      />
    </div>
  );
}

export default Hero;