import clsx from 'clsx';
import React from 'react';

import Carousel from '../../components/Carousel/Carousel';

import reviewerFirst from '../../images/reviewer-1.png';
import reviewerSecond from '../../images/reviewer-2.png';
import reviewerThird from '../../images/reviewer-3.png';

import styles from './Reviews.module.scss';

const Reviews = () => (
  <div className={styles.wrapper} id="reviews">
    <Carousel title="Відгуки" scrollWidth={330}>
      <div className={clsx(styles.card, styles.card1)}>
        <div className={styles.img}>
          <img src={reviewerFirst} alt="Світлана Онопрієнко" />
        </div>
        <div className={styles.content}>
          <div className={styles.review}>
            Подорожую із LeoBus уже 3 роки, завжди сервіс на найвищому рівні. Подача автобусів вчасно і завжди в
            гарному стані!
          </div>
          <div className={styles.bottom}>
            <div className={styles.hr} />
            <div className={styles.name}>— Світлана Онопрієнко</div>
            <div className={styles.counter}>9 поїздок із LeoBus</div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.card, styles.card2)}>
        <div className={styles.img}>
          <img src={reviewerSecond} alt="Олег Панасюк" />
        </div>
        <div className={styles.content}>
          <div className={styles.review}>
            Подорожую із LeoBus уже 3 роки, завжди сервіс на найвищому рівні. Подача автобусів вчасно і завжди в
            гарному стані!
          </div>
          <div className={styles.bottom}>
            <div className={styles.hr} />
            <div className={styles.name}>— Олег Панасюк</div>
            <div className={styles.counter}>4 поїздки із LeoBus</div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.card, styles.card3)}>
        <div className={styles.img}>
          <img src={reviewerThird} alt="Оля Панасюк" />
        </div>
        <div className={styles.content}>
          <div className={styles.review}>
            Подорожую із LeoBus уже 3 роки, завжди сервіс на найвищому рівні. Подача автобусів вчасно і завжди в
            гарному стані!
          </div>
          <div className={styles.bottom}>
            <div className={styles.hr} />
            <div className={styles.name}>— Оля Панасюк</div>
            <div className={styles.counter}>4 поїздки із LeoBus</div>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
);

export default Reviews;
