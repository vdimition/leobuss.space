import React from 'react';

import deliver from '../../images/deliver.png';
import registration from '../../images/registration.png';

import styles from './WeDo.module.scss';

const WeDo = () => (
  <div className={styles.wrapper}>
    <div className={styles.card}>
      <div className={styles.bg} />
      <div className={styles.img}>
        <img src={registration} alt="registration" />
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            Оформлення документів для подорожей чи працевлаштування
          </div>
          <div className={styles.subTitle}>
            Повний пакет документів, виготовлення Польських та Чеських віз.
          </div>
        </div>
        <button className={styles.learnMore} type="button">
          Дізнатись більше
          <div className={styles.underline} />
        </button>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.bg} />
      <div className={styles.img}>
        <img src={deliver} alt="deliver" />
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            Доставимо вантаж за адресою і з гаранією. Передача коштів
          </div>
          <div className={styles.subTitle}>
            Великогабаритні перевезення, доступні ціни.
          </div>
        </div>
        <button className={styles.learnMore} type="button">
          Дізнатись більше
          <div className={styles.underline} />
        </button>
      </div>
    </div>
  </div>
);

export default WeDo;
