import React from 'react';
import { Icon } from '@iconify/react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  iconSize?: number;
};

const ButtonArrow: React.FC<Props> = ({ children, className = '', iconSize = 18, ...rest }) => {
  const baseClass = 'btn-arrow border-natural-7 text-natural-7';
  const mergedClassName = `${baseClass} ${className}`.trim();

  return (
    <button className={mergedClassName} {...rest}>
      {children}
      <Icon icon="solar:arrow-right-linear" width={iconSize} />
    </button>
  );
};

export default ButtonArrow;
