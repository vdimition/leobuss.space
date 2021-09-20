import React, { useState } from 'react';

import Modal from '../../components/Modal/Modal';
import useGetCall from '../../hocks/useGetCall';

import data from './data';
import styles from './Directions.module.scss';

const Directions = () => {
  const { openWidget } = useGetCall();
  const [direction, setDirection] = useState(null);

  return (
    <div className={styles.wrapper}>
      {direction ? (
        <Modal isOpen={!!direction} close={() => setDirection(null)}>
          <div className={styles.modalContent}>
            <div className={styles.flag}>
              <img src={direction.flag} alt={direction.flag} />
            </div>
            <div className={styles.title}>
              {direction.country}
            </div>
            {direction.route.length ? (
              <>
                <div className={styles.subTitle}>
                  міста:
                </div>
                <div className={styles.content}>
                  {direction.route.join(', ')}
                </div>
              </>
            ) : null}
            <div className={styles.subTitle}>
              Документи:
            </div>
            <div className={styles.content}>
              {direction.documents.join(', ')}
              .
            </div>

            <div className={styles.contactUs}>
              <button className={styles.btn1} onClick={openWidget} type="button">
                Замовити дзвінок
              </button>
              <button className={styles.btn2} onClick={openWidget} type="button">
                зв’язатись із нами
                <div className={styles.underline} />
              </button>
            </div>
          </div>
        </Modal>
      ) : null }
      <div className={styles.container} id="directions">
        {data.map((direction) => (
          <div key={direction.country} className={styles.card}>
            <div className={styles.bg}>
              <div className={styles.content}>
                <div>
                  <div className={styles.img}>
                    <img src={direction.flag} alt={direction.flag} />
                  </div>
                  <div className={styles.title}>
                    {direction.country}
                  </div>
                </div>
                <button className={styles.btnLearnMore} type="button" onClick={() => setDirection(direction)}>
                  Дізнатись більше
                  <div className={styles.underline} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directions;
