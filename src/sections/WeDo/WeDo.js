import clsx from 'clsx';
import React from 'react';

import useGetCall from '../../hocks/useGetCall';

import styles from './WeDo.module.scss';

const WeDo = () => {
  const { openWidget } = useGetCall();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.bg} />
        <div className={clsx(styles.img, styles.imgBg1)} />
        <div className={styles.content}>
          <div>
            <div className={styles.title}>
              Оформлення документів для подорожей чи працевлаштування
            </div>
            <div className={styles.subTitle}>
              Повний пакет документів, виготовлення Польських та Чеських віз.
            </div>
          </div>
          <button className={styles.learnMore} type="button" onClick={openWidget}>
            Дізнатись більше
            <div className={styles.underline} />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.bg} />
        <div className={clsx(styles.img, styles.imgBg2)} />
        <div className={styles.content}>
          <div>
            <div className={styles.title}>
              Доставимо вашу посилку за адресою і з гаранією. Передача коштів
            </div>
            <div className={styles.subTitle}>
              Великогабаритні перевезення, доступні ціни.
            </div>
          </div>
          <button className={styles.learnMore} type="button" onClick={openWidget}>
            Дізнатись більше
            <div className={styles.underline} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
