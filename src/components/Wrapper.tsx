import React from 'react';
import { twMerge } from 'tailwind-merge';

interface WrapperProps {
  direction: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end';
  alignItems?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
  wrap?: boolean;
  flex?: boolean;
  customClasses?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  direction,
  wrap,
  justifyContent,
  alignItems,
  children,
  flex,
  customClasses,
}) => {
  const classes = twMerge(
    'flex',
    direction === 'row' && 'flex-row',
    direction === 'column' && 'flex-col',
    wrap && 'flex-wrap',
    flex && 'flex-1',
    justifyContent === 'center' && 'justify-center',
    justifyContent === 'space-between' && 'justify-between',
    justifyContent === 'space-around' && 'justify-around',
    justifyContent === 'space-evenly' && 'justify-evenly',
    justifyContent === 'start' && 'justify-start',
    justifyContent === 'end' && 'justify-end',
    alignItems === 'center' && 'items-center',
    alignItems === 'start' && 'items-start',
    alignItems === 'end' && 'items-end',
    alignItems === 'stretch' && 'items-stretch',
    alignItems === 'baseline' && 'items-baseline',
    customClasses
  );

  return <div className={classes}>{children}</div>;
};

export default Wrapper;
