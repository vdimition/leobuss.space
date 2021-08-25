import React from 'react';

import Menu from './components/Menu/Menu';
import Welcome from './sections/Welcome/Welcome';
import WhatWeDo from './sections/WhatWeDo/WhatWeDo';
import Reviews from './sections/Reviews/Reviews';
import Footer from './sections/Footer/Footer';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.wrapper}>
    <Menu />
    <Welcome />
    <WhatWeDo />
    <Reviews />
    <Footer />
  </div>
);

export default App;
