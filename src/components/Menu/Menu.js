import React from 'react';

import logo from '../../images/logo.svg';
import facebook from '../../images/Facebook.svg';
import viber from '../../images/viber.svg';
import vector from '../../images/Vector.svg';

import styles from './Menu.module.scss';

const Menu = () => (
  <div className={styles.menu}>
    <div className={styles.textLogo}>leo—bus</div>
    <div className={styles.logo}>
      <img src={logo} alt="logo LeoBus" />
    </div>
    <div className={styles.btnWrapper}>
      <button type="button" className={styles.btnImage}>
        <img src={viber} alt="viber" />
      </button>
      <button type="button" className={styles.btnImage}>
        <img src={facebook} alt="facebook" />
      </button>
      <button type="button" className={styles.btnVector}>
        <div className={styles.img}>
          <img src={vector} alt="vector" />
        </div>
        <div className={styles.phone}>
          +380 12 245 45 45
        </div>
      </button>
    </div>
  </div>
);

export default Menu;
