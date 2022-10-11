import React from 'react';

import { SVGProps } from '../types';

const AddIcon = ({ fill, size }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99698 0.0975258L8.00294 0.0975257V8.00298L0.0974844 8.00298V9.99702L8.00294 9.99702V17.9025L9.99698 17.9025L9.99698 9.99702H17.9024V8.00298H9.99698L9.99698 0.0975258Z"
        fill={fill}
      />
    </svg>
  );
};

export default AddIcon;
