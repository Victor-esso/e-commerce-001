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
      <div className='icon'>
        <Icon  icon="solar:arrow-right-linear" width={iconSize} />
      </div>
    </button>
  );
};

export default ButtonArrow;
