import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.NavBar}>
      <h1 className={styles.MainLogo}>
        <Link href="#home">John Doe</Link>
      </h1>
      <div className={styles.Paths}>
        <ul className={styles.NavItems}>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
        </ul>
        <ul className={styles.NavSocials}>
          <li>
            <Link href="/">
              <i></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              
              <i></i>
            </Link>
          </li>
          <li>
            <Link href="/">
             
              <i></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar