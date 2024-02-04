"use client";
import React from "react";
import styles from "./page.module.css";
import HamMenu from "./HamMenu";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.NavBar}>
      <h2 className={styles.MainLogo}>
        <Link href="#home" style={{ color: "#03045E" }}>
          Abhinav Pratap Singh
        </Link>
      </h2>
      <HamMenu />
      <ul className={styles.NavItems}>
        <li>
          <Link href="#home" style={{ color: "#03045E" }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" style={{ color: "#03045E" }}>
            About
          </Link>
        </li>
        <li>
          <Link href="#work" style={{ color: "#03045E" }}>
            Work
          </Link>
        </li>
      </ul>
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
  );
};

export default Navbar;
