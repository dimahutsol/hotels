import { FC } from 'react';

import LinkButton from '../../components/LinkButton/LinkButton';

import s from './HomePage.module.css';

const HomePage: FC = () => {
  return (
    <div className={s.page}>
      <h1 className={s.title}>Welcome to Hotels!</h1>
      <div className={s.box}>
        <p className={s.description}>Find your best hotel.</p>
        <LinkButton to="/hotels">Start</LinkButton>
      </div>
    </div>
  );
};

export default HomePage;
