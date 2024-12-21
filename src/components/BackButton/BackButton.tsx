import { FC } from 'react';

import s from './BackButton.module.css';

const BackButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className={s.buttonBack}>
    ← Go back
  </button>
);

export default BackButton;
