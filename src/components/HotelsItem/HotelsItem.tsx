import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';

import LinkButton from '../LinkButton/LinkButton';

import { Hotel } from '../../types/hotel';

import s from './HotelsItem.module.css';

interface HotelsItemProps {
  hotel: Hotel;
}

const HotelsItem: FC<HotelsItemProps> = memo(({ hotel }) => {
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{hotel.name}</h3>
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
      {hotel.rooms.map(({ roomType, amount }, index) => (
        <p key={index} className={s.text}>
          {roomType} : <strong>{amount}</strong>
        </p>
      ))}
      <img
        src={hotel.imageUrl}
        alt={`Image of ${hotel.name} located at ${hotel.location}`}
        loading="lazy"
        className={s.image}
      />
      <LinkButton to={`/hotels/${hotel.id}`} state={location}>
        View more
      </LinkButton>
    </div>
  );
});

export default HotelsItem;
