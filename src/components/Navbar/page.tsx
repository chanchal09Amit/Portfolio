import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.NavBar}>
      <h2 className={styles.MainLogo}>
        <Link href="#home" style={{ color: "#03045E" }}>
          John Doe
        </Link>
      </h2>
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
          <Link href="/" style={{ color: "#03045E" }}>
            <i className="bx bxl-twitter"></i>
          </Link>
        </li>
        <li>
          <Link href="/" style={{ color: "#03045E" }}>
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
}

export default Navbar