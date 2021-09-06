import React from 'react';

import WeDo from './sections/WeDo/WeDo';
import Menu from './components/Menu/Menu';
import Fleet from './sections/Fleet/Fleet';
import Footer from './sections/Footer/Footer';
import Welcome from './sections/Welcome/Welcome';
import Directions from './sections/Directions/Directions';
import Vacancies from './sections/Vacancies/Vacancies';
import Employment from './sections/Employment/Employment';
import Dispatchers from './sections/Dispatchers/Dispatchers';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.wrapper}>
    <Menu />
    <Welcome />
    <Directions />
    <WeDo />
    {/* <Reviews /> */}
    <Fleet />
    <Employment />
    <Dispatchers />
    <Vacancies />
    <Footer />
  </div>
);

export default App;
