import clsx from 'clsx';
import React from 'react';

import Carousel from '../../components/Carousel/Carousel';

import bus1 from '../../images/bus1.png';
import bus2 from '../../images/bus2.png';
import inside from '../../images/inside.png';

import styles from './Fleet.module.scss';

const Fleet = () => {
  const hint = (content) => (
    <div className={styles.hint}>
      <div className={styles.points}>
        <div className={styles.point} />
        <div className={styles.line} />
        <div className={styles.bigPoint}>
          <div className={styles.inner} />
        </div>
      </div>
      <div className={styles.description}>
        {content}
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper} id="fleet">
      <Carousel
        title="Автопарк"
        scrollWidth={530}
        styleTitle={styles.carouselTitle}
        styleHeader={styles.carouselHeader}
        hideShowMore
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
              Всі мікроавтобуси проходять технічне обслуговування перед кожним рейсом.
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
          <img className={styles.img} src={inside} alt="inside" />
          <div className={styles.hintPosition}>
            {hint('8 комфортних сидячих місць замість стандартних 14-ти')}
          </div>
        </div>
        <div className={clsx(styles.card, styles.cardType3)}>
          <img className={styles.img} src={bus2} alt="bus" />
          <div className={styles.hintPosition}>
            {hint('Клімат-контроль, безкоштовний WI-FI, USB зарядки.')}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Fleet;
