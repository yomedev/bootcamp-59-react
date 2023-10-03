import clsx from 'clsx';

import styles from './Skeleton.module.css';

export const Skeleton = ({ className, ...props }) => {
  return <div className={clsx(styles.skeleton, className)} {...props} />;
};