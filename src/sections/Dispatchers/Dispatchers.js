import React from 'react';

import styles from './Dispatchers.module.scss';

const Dispatchers = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.bg} />
      <div className={styles.innerContent}>
        <div className={styles.title}>
          Диспетчери завжди з вами
        </div>
        <div className={styles.description}>
          Наші диспетчери комунікабельні, ввічливі та привітні. Вони допоможуть Вам у вирішенні будь-яких питань.
        </div>
      </div>
    </div>
  </div>
);

export default Dispatchers;
