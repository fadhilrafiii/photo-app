import React from 'react';

import Hamburger from 'Components/Hamburger';
import Icon from 'Components/Icons';
import { IconName } from 'Components/Icons/enum';

import { Colors } from 'Shared/Constants/Colors';

import { useNavbarUtility } from './utils';

import styles from './index.module.css';

const Navbar = React.memo(() => {
  const { navbarRef } = useNavbarUtility();

  return (
    <header ref={navbarRef} className={styles.container}>
      <img
        src="images/Profile Picture.png"
        alt="Profile Picture"
        className={styles.profilePicture}
      />
      <div>
        <div className={styles.profileName}>
          <h3>Melanie Tan</h3>
          <Icon name={IconName.Verified} fill={Colors.Secondary} />
          <div className={styles.hamburger}>
            <Hamburger />
          </div>
        </div>
        <p className={styles.profileRole}>Professional Food Photographer</p>
        <div className={styles.address}>
          <span>
            <Icon name={IconName.Location} size={10} />
            Bangkok
          </span>
          <span>
            <Icon name={IconName.Email} size={10} />
            melanietan99@gmail.com
          </span>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
