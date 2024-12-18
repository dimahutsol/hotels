import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../Container/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import s from './Layout.module.css';

const Layout: FC = () => {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Suspense fallback={<span>Loading...</span>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
