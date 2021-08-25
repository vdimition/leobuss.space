import React from 'react';

import bus from '../../images/bus.svg';
import truck from '../../images/truck.svg';
import documents from '../../images/documents.svg';

import styles from './WhatWeDo.module.scss';

const WhatWeDo = () => (
  <div className={styles.wrapper}>
    <div className={styles.card}>
      <div className={styles.bg}>
        <div className={styles.content}>
          <div>
            <div className={styles.img}>
              <img src={bus} alt="bus" />
            </div>
            <div className={styles.title}>Перевезення:</div>
            <ul className={styles.list}>
              <li>Чехія</li>
              <li>Італія</li>
              <li>Австрія</li>
              <li>Німеччина</li>
              <li>Польща</li>
              <li>Угорщина</li>
              <li>Словакія</li>
              <li>Хорватія</li>
            </ul>
          </div>
          <button className={styles.btnLearnMore} type="button">
            Дізнатись більше
            <div className={styles.underline} />
          </button>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.bg}>
        <div className={styles.content}>
          <div>
            <div className={styles.img}>
              <img src={documents} alt="documents" />
            </div>
            <div className={styles.title}>Оформлення документів для подорожей чи працевлаштування.</div>
            <div className={styles.subTitle}>Повний пакет документів, виготовлення Польських та Чеських віз.</div>
          </div>
          <button className={styles.btnLearnMore} type="button">
            Дізнатись більше
            <div className={styles.underline} />
          </button>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.bg}>
        <div className={styles.content}>
          <div>
            <div className={styles.img}>
              <img src={truck} alt="truck" />
            </div>
            <div className={styles.title}>Доставимо вантаж за адресою і з гаранією. Передача коштів.</div>
            <div className={styles.subTitle}>Великогабаритні перевезення, доступні ціни.</div>
          </div>
          <button className={styles.btnLearnMore} type="button">
            Дізнатись більше
            <div className={styles.underline} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default WhatWeDo;
