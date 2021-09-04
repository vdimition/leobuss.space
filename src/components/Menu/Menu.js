import React, { useState } from 'react';

import logo from '../../images/logo.svg';
import viber from '../../images/viber.svg';
import vector from '../../images/Vector.svg';
import youtube from '../../images/youtube.svg';
import facebook from '../../images/Facebook.svg';
import messenger from '../../images/messenger.svg';
import instagram from '../../images/instagram.svg';

import styles from './Menu.module.scss';

const Menu = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
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
          <button type="button" className={styles.btnVector} onClick={() => setIsOpenPopup(!isOpenPopup)}>
            <div className={styles.img}>
              <img src={vector} alt="vector" />
            </div>
            <div className={styles.phone}>
              +380 12 245 45 45
            </div>
          </button>
        </div>
        {isOpenPopup ? (
          <div className={styles.popup}>
            <div className={styles.title}>
              телефони
            </div>
            <div className={styles.line} />
            <div className={styles.content}>
              +38 093 113 35 91
            </div>
            <div className={styles.line} />
            <div className={styles.content}>
              +38 093 113 35 91
            </div>
            <div className={styles.line} />
            <div className={styles.title}>
              Соц. мережі
            </div>
            <div className={styles.line} />
            <div className={styles.content}>
              <div className={styles.img}>
                <img src={youtube} alt="youtube" />
              </div>
              YouTube
            </div>
            <div className={styles.line} />
            <div className={styles.content}>
              <div className={styles.img}>
                <img src={instagram} alt="instagram" />
              </div>
              Instagram
            </div>
            <div className={styles.line} />
            <div className={styles.content}>
              <div className={styles.img}>
                <img src={messenger} alt="messenger" />
              </div>
              Messenger
            </div>
            <div className={styles.line} />
          </div>
        ) : null}
      </div>
      {isOpenPopup ? (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button onClick={() => setIsOpenPopup(false)} type="button" className={styles.popupOutside} />
      ) : null}
    </>
  );
};

export default Menu;
