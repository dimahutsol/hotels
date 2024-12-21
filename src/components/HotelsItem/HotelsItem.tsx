import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import LinkButton from '../LinkButton/LinkButton';

import { Hotel } from '../../types/hotel';

import s from './HotelsItem.module.css';

interface HotelsItemProps {
  hotel: Hotel;
}

const HotelsItem: FC<HotelsItemProps> = ({ hotel }) => {
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <h3>{hotel.name}</h3>
      <p>{hotel.location}</p>
      <p>{hotel.rating}</p>
      <p>{hotel.boardBasis}</p>
      <p>{hotel.datesOfTravel}</p>
      {hotel.rooms.map(({ roomType, amount }, index) => (
        <p key={index}>
          {roomType} : {amount}
        </p>
      ))}
      <img src={hotel.imageUrl} alt={`${hotel.name} picture`} loading="lazy" />
      <LinkButton to={`/hotels/${hotel.id}`} state={location}>
        View more
      </LinkButton>
    </div>
  );
};

export default HotelsItem;
