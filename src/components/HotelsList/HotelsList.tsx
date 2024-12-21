import { FC } from 'react';

import HotelsItem from '../HotelsItem/HotelsItem';

import { Hotel } from '../../types/hotel';

import s from './HotelsList.module.css';

interface HotelsListProps {
  hotels: Hotel[] | [];
}

const HotelsList: FC<HotelsListProps> = ({ hotels }) => {
  return (
    <div className={s.wrapper}>
      {hotels.map(hotel => (
        <div key={hotel.id}>
          <HotelsItem hotel={hotel} />
        </div>
      ))}
    </div>
  );
};

export default HotelsList;
