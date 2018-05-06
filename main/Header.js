import React, { Component } from 'react';
import styles from './Header.css';

const Header = props => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome Back</h1>
    </header>
  );
};

export default Header;
