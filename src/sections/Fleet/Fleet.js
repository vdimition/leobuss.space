import clsx from 'clsx';
import React from 'react';

import Carousel from '../../components/Carousel/Carousel';

import bus1 from '../../images/bus1.png';
import bus2 from '../../images/bus2.png';

import styles from './Fleet.module.scss';

const Fleet = () => (
  <div className={styles.wrapper}>
    <Carousel
      title="Автопарк"
      scrollWidth={530}
      styleTitle={styles.carouselTitle}
      styleHeader={styles.carouselHeader}
    >
      <div className={clsx(styles.card, styles.cardType1)}>
        <div className={clsx(styles.inner, styles.inner1)}>
          <div className={styles.title}>Складається із 15-ти авто, серед яких є такі моделі:</div>
          <ul className={styles.list}>
            <li className={styles.item}>Mercedes Sprinter</li>
            <li className={styles.item}>Volkswagen Transporter</li>
            <li className={styles.item}>Opel Vivaro</li>
            <li className={styles.item}>Reno Traffic</li>
          </ul>
        </div>
        <div className={clsx(styles.inner, styles.inner3)}>
          <div className={styles.title}>☝️</div>
          <div className={styles.content}>
            Всі автобуси проходять технічне обслуговування перед кожним рейсом.
            Обслуговуються тільки оригінальними запчастинами. Стаж водіїїв не менше 5 років.
            Ще було б добре додати сюди більше.
          </div>
        </div>
      </div>
      <div className={clsx(styles.card, styles.cardType1)}>
        <div className={clsx(styles.inner, styles.inner2)}>
          <img className={styles.img} src={bus1} alt="bus" />
        </div>
        <div className={clsx(styles.inner, styles.inner2)}>
          <img className={styles.img} src={bus2} alt="bus" />
        </div>
      </div>
      <div className={clsx(styles.card, styles.cardType2)}>
        <img className={styles.img} src={bus2} alt="bus" />
      </div>
      <div className={clsx(styles.card, styles.cardType1)}>
        <div className={clsx(styles.inner, styles.inner2)}>
          <img className={styles.img} src={bus1} alt="bus" />
        </div>
        <div className={clsx(styles.inner, styles.inner2)}>
          <img className={styles.img} src={bus2} alt="bus" />
        </div>
      </div>
      <div className={clsx(styles.card, styles.cardType2)}>
        <img className={styles.img} src={bus2} alt="bus" />
      </div>
    </Carousel>
  </div>
);

export default Fleet;
