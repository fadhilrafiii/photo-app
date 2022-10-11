import React from 'react';

import { SVGProps } from '../types';

const LocationIcon: React.FC<SVGProps> = ({ size, fill }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.62161C0 1.62465 1.57009 0 3.5 0C5.42989 0 6.99996 1.62465 7 3.62161C7 6.09989 3.86784 9.73816 3.73449 9.89183C3.60946 10.0359 3.39077 10.0362 3.26551 9.89183C3.13216 9.73816 0 6.09989 0 3.62161ZM1.73908 3.62161C1.73908 4.62633 2.52901 5.44374 3.5 5.44374C4.47097 5.44374 5.2609 4.62635 5.2609 3.62163C5.2609 2.6169 4.47097 1.79949 3.5 1.79949C2.52903 1.79949 1.73908 2.61688 1.73908 3.62161Z"
        fill={fill}
      />
    </svg>
  );
};

export default LocationIcon;
