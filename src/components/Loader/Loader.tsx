import { FC } from 'react';
import { Oval } from 'react-loader-spinner';

import s from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={s.wrapper}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperClass={s.loaderBox}
      />
    </div>
  );
};

export default Loader;
