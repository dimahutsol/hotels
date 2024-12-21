import { FC } from 'react';

import HotelsItem from '../HotelsItem/HotelsItem';

import { Hotel } from '../../types/hotel';

import s from './HotelsList.module.css';

interface HotelsListProps {
  hotels: Hotel[];
}

const HotelsList: FC<HotelsListProps> = ({ hotels }) => {
  return (
    <ul className={s.list}>
      {hotels.length === 0 ? (
        <p className={s.noHotelsText}>No hotels available</p>
      ) : (
        hotels.map(hotel => (
          <li key={hotel.id} className={s.listItem}>
            <HotelsItem hotel={hotel} />
          </li>
        ))
      )}
    </ul>
  );
};

export default HotelsList;
