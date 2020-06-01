import React from 'react';
import Img from 'react-image';
import { Skeleton } from '@material-ui/lab';

interface IMyImage {
  src: string | string[],
  alt: string,
  customLoader?: React.ReactElement,
  className?: string,
}

export default (props: IMyImage): React.ReactElement<IMyImage> => {
  const {
    src, className, customLoader, alt,
  } = props;
  const mySrc: string[] = [];

  if (typeof src === 'string') {
    mySrc.push(src, '/img/logo_original.png');
  } else {
    mySrc.push(...src, '/img/logo_original.png');
  }

  return (
    <Img
      src={mySrc}
      alt={alt}
      className={className}
      loader={(customLoader) || (
        <Skeleton animation="pulse" variant="rect" width={200} height={100} />
      )}
    />
  );
};
