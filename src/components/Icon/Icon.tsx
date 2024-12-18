import { FC } from 'react';

import Icons from '../../assets/icons.svg';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${Icons}#${name}`}></use>
    </svg>
  );
};
export default Icon;
