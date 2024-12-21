import { FC, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const HotelsPage = lazy(() => import('./pages/HotelsPage/HotelsPage'));
const HotelDetailsPage = lazy(() => import('./pages/HotelDetailsPage/HotelDetailsPage'));

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:hotelId" element={<HotelDetailsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/hotels" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
