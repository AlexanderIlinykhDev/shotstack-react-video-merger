import React from 'react';
import { has } from 'lodash';
import classnames from 'classnames/bind';
import classes from './spinner.module.scss';

type Color = 'brand-blue' | 'white';

type Size = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  size?: Size;
  color?: Color;
  className?: string;
  style?: React.CSSProperties;
}

const cx = classnames.bind(classes);

export const DIAMETERS: Record<Size, number> = {
  small: 20,
  medium: 48,
  large: 80,
} as const;

/**
 * Компонент спиннера.
 * @param props Свойства.
 * @return Элемент.
 */

export const Spinner = ({ size = 'medium', className, style }: SpinnerProps) => {
  const readySize: Size = has(DIAMETERS, size) ? size : 'medium';
  const diameter = DIAMETERS[readySize];
  const radius = diameter / 2;

  return (
    <div className={cx(classes.wrapper, className)} style={style}>
      <svg
        className={cx('spinner', `size-${readySize}`)}
        viewBox={`0 0 ${diameter} ${diameter}`}
        width={diameter}
        height={diameter}
        stroke='#1f84db'
      >
        <circle
          className={cx('circle')}
          cx={radius}
          cy={radius}
          r={radius - 1} // учет обводки
        />
      </svg>
    </div>
  );
};
