import React from 'react';

import useGetCall from '../../hocks/useGetCall';

import styles from './Welcome.module.scss';

const Welcome = () => {
  const { openWidget } = useGetCall();

  return (
    <div className={styles.wrapperBg} id="welcome">
      <div className={styles.inner}>
        <div className={styles.redBlock}>
          <div className={styles.bg}>
            <h1 className={styles.title}>
              Міжнародні пасажирські перевезення
              <div />
              Україна - Європа
            </h1>
            <div className={styles.subTitle}>
              Оформлення необхідних документів для виїзду за кордон.
            </div>
            <div className={styles.subTitle}>
              Доставка посилок та перевезення вантажів
            </div>
            <div className={styles.subTitle}>
              Надійні, безпечні і комфортабельні мікроавтобуси, досвідчені водії, щоденні виїзди.
            </div>
            <div className={styles.btnBlock}>
              <button type="button" className={styles.requestColl} onClick={openWidget}>Замовити дзвінок</button>
              <button type="button" className={styles.contactUs} onClick={openWidget}>
                зв’язатись із нами
                <div className={styles.underline} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
