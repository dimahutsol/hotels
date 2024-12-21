import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../Container/Container';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import s from './Layout.module.css';

const Layout: FC = () => {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Suspense fallback={<Loader />}>
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
