import { FC, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

import { Hotel } from '../../types/hotel';
import { getHotelById } from '../../services/hotelsApi';

import s from './HotelDetailsPage.module.css';

const HotelDetailsPage: FC = () => {
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { hotelId } = useParams();
  const goBackRef = useRef(location.state ?? '/hotels');

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setIsLoading(true);
        if (hotelId) {
          const data = await getHotelById(hotelId);
          if (!data) {
            setError('Hotel Not Found');
          } else {
            setHotel(data);
          }
        }
      } catch (err) {
        console.log(err);
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotel();
  }, [hotelId]);

  console.log('hotel', hotel);

  return (
    <div className={s.page}>
      {isLoading && <Loader />}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={() => navigate(goBackRef.current)}>Go back</button>
        </div>
      )}
      {hotel && (
        <div>
          <button onClick={() => navigate(goBackRef.current)}>Go back</button>
          <h1>{hotel.name}</h1>
          <p>{hotel.location}</p>
          <p>{hotel.rating}</p>
        </div>
      )}
    </div>
  );
};

export default HotelDetailsPage;
