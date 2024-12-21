import { FC, useEffect, useState } from 'react';

import HotelsList from '../../components/HotelsList/HotelsList';
import Loader from '../../components/Loader/Loader';

import { Hotel } from '../../types/hotel';
import { getHotels } from '../../services/hotelsApi';
import { showToast } from '../../utils/toasts';

import s from './HotelsPage.module.css';

const HotelsPage: FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setIsLoading(true);
        const data = await getHotels();
        setHotels(data);
      } catch (err) {
        console.log(err);
        setError('Sorry, something went wrong.');
        showToast('Sorry, something went wrong.', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className={s.page}>
      {isLoading && <Loader />}
      {error && <p className={s.errorText}>{error}</p>}
      {!isLoading && !error && hotels.length === 0 && (
        <p className={s.errorText}>No hotels available.</p>
      )}
      {!isLoading && !error && <HotelsList hotels={hotels} />}
    </div>
  );
};

export default HotelsPage;
