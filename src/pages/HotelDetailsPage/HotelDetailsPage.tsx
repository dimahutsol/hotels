import { FC, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import BackButton from '../../components/BackButton/BackButton';

import { Hotel } from '../../types/hotel';
import { getHotelById } from '../../services/hotelsApi';
import { showToast } from '../../utils/toasts';

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
            showToast('Hotel Not Found', 'error');
          } else {
            setHotel(data);
          }
        }
      } catch (err) {
        console.log(err);
        setError('Something went wrong');
        showToast('Something went wrong', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotel();
  }, [hotelId]);

  return (
    <div className={s.page}>
      {isLoading && <Loader />}
      {error && (
        <div>
          <BackButton onClick={() => navigate(goBackRef.current)} />
          <p className={s.errorText}>{error}</p>
        </div>
      )}
      {hotel && (
        <>
          <BackButton onClick={() => navigate(goBackRef.current)} />
          <h3 className={s.title}>{hotel.name}</h3>
          <div className={s.innerBox}>
            <div className={s.infoBox}>
              <p className={s.text}>
                Location: <strong>{hotel.location}</strong>
              </p>
              <p className={s.text}>
                Rating: <strong>{hotel.rating}</strong>
              </p>
              <p className={s.text}>
                Board Basis: <strong>{hotel.boardBasis}</strong>
              </p>
              <p className={s.text}>
                Dates:{' '}
                <strong>
                  {hotel.datesOfTravel[0]} to {hotel.datesOfTravel[1]}
                </strong>
              </p>
              {hotel.rooms.length > 0 ? (
                hotel.rooms.map(({ roomType, amount }, index) => (
                  <p key={index} className={s.text}>
                    {roomType} : <strong>{amount}</strong>
                  </p>
                ))
              ) : (
                <p className={s.text}>No rooms available.</p>
              )}
            </div>
            <img
              src={hotel.imageUrl || '../../assets/images/no_image.png'}
              alt={`${hotel.name} picture`}
              loading="lazy"
              className={s.image}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HotelDetailsPage;
