import clsx from 'clsx';
import React, { useRef } from 'react';

import arrowL from '../../images/arrowL.svg';
import arrowR from '../../images/arrowR.svg';

import styles from './Carousel.module.scss';

const Carousel = ({
  title,
  children,
  scrollWidth,
  styleTitle = '',
  styleHeader = '',
}) => {
  const carousel = useRef(null);

  const handlerScroll = (width) => {
    if (carousel) {
      // eslint-disable-next-line operator-assignment
      carousel.current.scrollLeft = carousel.current.scrollLeft + width;
    }
  };

  return (
    <div>
      <div className={clsx(styles.header, styleHeader)}>
        <div className={styleTitle || styles.title}>
          {title}
        </div>
        <div className={styles.btnBlock}>
          <button type="button" className={styles.btnContactUs}>
            Побачити усі
            <div className={styles.underline} />
          </button>
          <button
            disabled={!carousel}
            onClick={() => handlerScroll(-scrollWidth)}
            type="button"
            className={styles.controller}
          >
            <img src={arrowL} alt="arrow" />
          </button>
          <button
            disabled={!carousel}
            onClick={() => handlerScroll(scrollWidth)}
            type="button"
            className={styles.controller}
          >
            <img src={arrowR} alt="arrow" />
          </button>
        </div>
      </div>
      <div ref={carousel} className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
