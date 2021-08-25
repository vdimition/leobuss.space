import React from 'react';

import logo from '../../images/logo-2.svg';
import youtube from '../../images/youtube.svg';
import messenger from '../../images/messenger.svg';
import instagram from '../../images/instagram.svg';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.contactBlock}>
        <div className={styles.logos}>
          <div className={styles.img}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.title}>
            leo—bus
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.infoBlock}>
            <div className={styles.title}>адреса</div>
            <div className={styles.hr} />
            <div className={styles.info}>
              Бульвар Шевченка, 218 м. Черкаси
            </div>
            <div className={styles.hr} />
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.title}>телефони</div>
            <div className={styles.hr} />
            <div className={styles.info}>
              +38 093 113 35 91
            </div>
            <div className={styles.hr} />
            <div className={styles.info}>
              +38 067 268 63 53
            </div>
            <div className={styles.hr} />
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.title}>Соц. мережі</div>
            <div className={styles.hr} />
            <div className={styles.info}>
              <div className={styles.img}>
                <img src={youtube} alt="youtube" />
              </div>
              YouTube
            </div>
            <div className={styles.hr} />
            <div className={styles.info}>
              <div className={styles.img}>
                <img src={instagram} alt="instagram" />
              </div>
              Instagram
            </div>
            <div className={styles.hr} />
            <div className={styles.info}>
              <div className={styles.img}>
                <img src={messenger} alt="messenger" />
              </div>
              Messenger
            </div>
            <div className={styles.hr} />
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.links}>
        <div className={styles.menu}>
          <button type="button" className={styles.link}>напрямки роботи</button>
          <button type="button" className={styles.link}>відгуки</button>
          <button type="button" className={styles.link}>автопарк</button>
          <button type="button" className={styles.link}>працевлаштування</button>
          <button type="button" className={styles.link}>диспетчери</button>
          <button type="button" className={styles.link}>вакансії</button>
        </div>
        <div className={styles.copyright}>Copyright © 2021 LeoBus</div>
      </div>
    </div>
  </footer>
);

export default Footer;
