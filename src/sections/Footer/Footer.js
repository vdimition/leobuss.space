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
        <a href={'#welcome' || ''} className={styles.logos}>
          <div className={styles.img}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.title}>
            leo—bus
          </div>
        </a>
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
            <a href="tel:+38 093 113 35 91" className={styles.info}>
              +38 093 113 35 91
            </a>
            <div className={styles.hr} />
            <a href="tel:+38 067 268 63 53" className={styles.info}>
              +38 067 268 63 53
            </a>
            <div className={styles.hr} />
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.title}>Соц. мережі</div>
            <div className={styles.hr} />
            <a
              href="https://www.youtube.com/watch?v=Pw9fAknuoEI"
              target="_blank"
              rel="noreferrer"
              className={styles.info}
            >
              <div className={styles.img}>
                <img src={youtube} alt="youtube" />
              </div>
              YouTube
            </a>
            <div className={styles.hr} />
            <a href="https://www.instagram.com/leobus5/" target="_blank" rel="noreferrer" className={styles.info}>
              <div className={styles.img}>
                <img src={instagram} alt="instagram" />
              </div>
              Instagram
            </a>
            <div className={styles.hr} />
            <a href="https://www.facebook.com/groups/leobus" target="_blank" className={styles.info} rel="noreferrer">
              <div className={styles.img}>
                <img src={messenger} alt="messenger" />
              </div>
              Messenger
            </a>
            <div className={styles.hr} />
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.links}>
        <div className={styles.menu}>
          <a href={'#directions' || ''} className={styles.link}>напрямки роботи</a>
          {/* TODO add reviews section */}
          {/* <a href={'#reviews' || ''} className={styles.link}>відгуки</a> */}
          <a href={'#fleet' || ''} className={styles.link}>автопарк</a>
          <a href={'#employment' || ''} className={styles.link}>працевлаштування</a>
          <a href={'#dispatchers' || ''} className={styles.link}>диспетчери</a>
          <a href={'#vacancies' || ''} className={styles.link}>вакансії</a>
        </div>
        <div className={styles.copyright}>Copyright © 2021 LeoBus</div>
      </div>
    </div>
  </footer>
);

export default Footer;
