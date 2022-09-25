import React, { useEffect, useState } from 'react';
import { AppDispatch } from '../app/store';
import { activate, deactivate } from '../features/alert/alertSlice';

interface AlertProps {
  variant: 'info' | 'danger' | 'success' | 'warning' | 'dark';
  children: React.ReactNode;
  title: string;
}

const Alert: React.FC<AlertProps> = ({ variant, title, children }) => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'info':
        setClasses(
          'p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'
        );
        break;
      case 'danger':
        setClasses(
          'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
        );
        break;
      case 'success':
        setClasses(
          'p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
        );
        break;
      case 'warning':
        setClasses(
          'p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800'
        );
        break;
      case 'dark':
        setClasses(
          'p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300'
        );
        break;
      default:
        setClasses('');
    }
  }, [variant]);
  return (
    <div className={classes} role="alert">
      <span className="font-medium mr-1">{title}</span>
      {children}
    </div>
  );
};

export const showAlert = async (
  title: string,
  text: string,
  variant: AlertVariant,
  dispatch: AppDispatch
): Promise<void> => {
  dispatch(
    activate({
      isShown: true,
      title,
      text,
      variant,
    })
  );
  await new Promise((resolve) => setTimeout(resolve, 6000));
  dispatch(deactivate());
};

export type AlertVariant = 'info' | 'danger' | 'success' | 'warning' | 'dark';
export default Alert;
