import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <img src='/images/Logo.jpg' alt="Dans mon jardin logo" />
        <div className={styles.logo}> Dans mon jardin !</div>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
