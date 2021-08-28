import React from 'react';

import employment1 from '../../images/employment1.svg';
import employment2 from '../../images/employment2.svg';
import employment3 from '../../images/employment3.svg';
import employment4 from '../../images/employment4.svg';

import styles from './Employment.module.scss';

const Employment = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.title}>
        Працевлаштування
      </div>
      <div className={styles.innerContent}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={employment1} alt="employment feature" />
          </div>
          <div className={styles.cardTitle}>Консультація</div>
          <div className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={employment2} alt="employment feature" />
          </div>
          <div className={styles.cardTitle}>Надійні роботодавці</div>
          <div className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={employment3} alt="employment feature" />
          </div>
          <div className={styles.cardTitle}>Перевезення</div>
          <div className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={employment4} alt="employment feature" />
          </div>
          <div className={styles.cardTitle}>Оформлення документів</div>
          <div className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Employment;
