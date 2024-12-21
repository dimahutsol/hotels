import { FC, useEffect, useState } from 'react';

import HotelsList from '../../components/HotelsList/HotelsList';
import Loader from '../../components/Loader/Loader';

import { Hotel } from '../../types/hotel';
import { getHotels } from '../../services/hotelsApi';

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, []);

  console.log('hotels', hotels);

  return (
    <div className={s.page}>
      {isLoading && <Loader />}
      {error && <p className={s.errorText}>{error}Sorry, something went wrong.</p>}
      <HotelsList hotels={hotels} />
    </div>
  );
};

export default HotelsPage;
