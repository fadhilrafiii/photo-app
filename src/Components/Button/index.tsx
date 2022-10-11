import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './index.module.css';

export enum ButtonTheme {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonTheme;
  buttonSize: ButtonSize;
  isCircleButton?: boolean;
  children: ReactNode | ReactNode[];
}

const Button: React.FC<ButtonProps> = ({
  children,
  theme,
  isCircleButton = false,
  buttonSize,
  ...props
}: ButtonProps) => {
  const classes = [styles.button, styles[theme], styles[buttonSize]];

  if (isCircleButton) classes.push(styles.circle);

  return (
    <button {...props} className={classes.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
