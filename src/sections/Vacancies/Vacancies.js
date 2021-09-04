import React from 'react';

import Carousel from '../../components/Carousel/Carousel';

import vacancies3 from '../../images/vacancies1.svg';
import vacancies2 from '../../images/vacancies2.svg';
import vacancies1 from '../../images/vacancies3.svg';

import styles from './Vacancies.module.scss';

const Vacancies = () => (
  <div className={styles.wrapper}>
    <Carousel title="Вакансії" scrollWidth={300} hideShowMore>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={vacancies1} alt="vacancies" />
          </div>
          <div className={styles.title}>
            Менеджер
          </div>
          <div className={styles.subTitle}>
            офіс, повний робочий день
          </div>
          <div className={styles.description}>
            Необхідно розробляти стратегічні цілі діяльності автотранспортного підприємства, забезпечувати прийняття
            оптимальних управлінських рішень з метою його стабільного функціонування на короткострокову та довгострокову
            перспективу.
          </div>
        </div>
        <div>
          <button type="button" className={styles.btnContactUs}>
            зв’язатись із нами
            <div className={styles.underline} />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={vacancies2} alt="vacancies" />
          </div>
          <div className={styles.title}>
            Диспетчер
          </div>
          <div className={styles.subTitle}>
            офіс, повний робочий день
          </div>
          <div className={styles.description}>
            Необхідно здійснювати оперативний контроль за процесами компанії, що забезпечуватиме ритмічний і
            безперебійний рух виконання послуг та різноманітних операцій за встановленими графіками.
          </div>
        </div>
        <div>
          <button type="button" className={styles.btnContactUs}>
            зв’язатись із нами
            <div className={styles.underline} />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={vacancies3} alt="vacancies" />
          </div>
          <div className={styles.title}>
            Водій
          </div>
          <div className={styles.subTitle}>
            офіс, повний робочий день
          </div>
          <div className={styles.description}>
            Двічі на тиждень у вівторок та п’ятницю ви їдете нашим автомобілем із Черкас до різних міст Європи. За
            потреби будуть перевозитись товари або пасажири. Митне оформлення товарів виконує наше підприємство.
            Відпочинок під час поїздок безкоштовний.
          </div>
        </div>
        <div>
          <button type="button" className={styles.btnContactUs}>
            зв’язатись із нами
            <div className={styles.underline} />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={vacancies1} alt="vacancies" />
          </div>
          <div className={styles.title}>
            Менеджер
          </div>
          <div className={styles.subTitle}>
            офіс, повний робочий день
          </div>
          <div className={styles.description}>
            Необхідно розробляти стратегічні цілі діяльності автотранспортного підприємства, забезпечувати прийняття
            оптимальних управлінських рішень з метою його стабільного функціонування на короткострокову та довгострокову
            перспективу.
          </div>
        </div>
        <div>
          <button type="button" className={styles.btnContactUs}>
            зв’язатись із нами
            <div className={styles.underline} />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={vacancies2} alt="vacancies" />
          </div>
          <div className={styles.title}>
            Диспетчер
          </div>
          <div className={styles.subTitle}>
            офіс, повний робочий день
          </div>
          <div className={styles.description}>
            Необхідно здійснювати оперативний контроль за процесами компанії, що забезпечуватиме ритмічний і
            безперебійний рух виконання послуг та різноманітних операцій за встановленими графіками.
          </div>
        </div>
        <div>
          <button type="button" className={styles.btnContactUs}>
            зв’язатись із нами
            <div className={styles.underline} />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={vacancies3} alt="vacancies" />
          </div>
          <div className={styles.title}>
            Водій
          </div>
          <div className={styles.subTitle}>
            офіс, повний робочий день
          </div>
          <div className={styles.description}>
            Двічі на тиждень у вівторок та п’ятницю ви їдете нашим автомобілем із Черкас до різних міст Європи. За
            потреби будуть перевозитись товари або пасажири. Митне оформлення товарів виконує наше підприємство.
            Відпочинок під час поїздок безкоштовний.
          </div>
        </div>
        <div>
          <button type="button" className={styles.btnContactUs}>
            зв’язатись із нами
            <div className={styles.underline} />
          </button>
        </div>
      </div>
    </Carousel>
  </div>
);

export default Vacancies;
