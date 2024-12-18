import { FC } from 'react';

import Container from '../Container/Container';

import s from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <p className={s.rightsText}>© 2024 Hotels. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
