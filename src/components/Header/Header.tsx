import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../Container/Container';

import s from './Header.module.css';

interface LinkProps {
  isActive: boolean;
}

const buildLinkClass = ({ isActive }: LinkProps) => {
  return `${s.link} ${isActive ? s.linkActive : ''}`;
};

const Header: FC = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerBox}>
          <NavLink to="/" className={s.logo}>
            Logo
          </NavLink>
          <nav className={s.nav}>
            <NavLink to="/" className={({ isActive }) => buildLinkClass({ isActive })}>
              Home
            </NavLink>
            <NavLink to="/hotels" className={({ isActive }) => buildLinkClass({ isActive })}>
              Hotels
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
