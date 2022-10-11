import React from 'react';

import styles from './index.module.css';

const Hamburger = () => {
  return (
    <span className={styles.container}>
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </span>
  );
};

export default Hamburger;
