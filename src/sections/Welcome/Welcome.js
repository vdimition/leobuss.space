import React from 'react';

import styles from './Welcome.module.scss';

const Welcome = () => (
  <div className={styles.wrapperBg}>
    <div className={styles.inner}>
      <div className={styles.redBlock}>
        <div className={styles.bg}>
          <h1 className={styles.title}>Міжнародні перевезення, оформлення документів, доставка вантажу</h1>
          <div className={styles.subTitle}>
            Надійні і безпечні автобуси, досвідчені водії, щоденні відправлення, консультації.
          </div>
          <div className={styles.btnBlock}>
            <button type="button" className={styles.requestColl}>Замовити дзвінок</button>
            <button type="button" className={styles.contactUs}>
              зв’язатись із нами
              <div className={styles.underline} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
