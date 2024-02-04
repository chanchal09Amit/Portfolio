"use client"
import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import { useState } from 'react';

const HamMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
     setIsOpen(!isOpen);
   };
    return (
      <div className={styles.Ham}>
        <div className={styles.Circle} onClick={handleClick}></div>

        {isOpen ? (
          <ul className={styles.NavItemsM}>
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
        ) : (
          <></>
        )}
      </div>
    );
}

export default HamMenu