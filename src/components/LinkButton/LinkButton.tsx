import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import s from './LinkButton.module.css';

interface LinkButtonProps {
  to: string;
  children: ReactNode;
  state?: object;
}

const LinkButton: FC<LinkButtonProps> = ({ to, children }) => {
  return (
    <div className={s.buttonBox}>
      <Link to={to} className={s.button}>
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
