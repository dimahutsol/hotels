import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../Container/Container';

import s from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerBox}>
          <NavLink to="/">Logo</NavLink>
          <nav className={s.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/hotels">Hotels</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
