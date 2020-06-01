import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonProps } from '@material-ui/core';
import Styles from './Styles';

export default (props: ButtonProps): React.ReactElement<any> => {
  const classes = Styles();

  return (
    <Button
      className={classes.btn}
      {...props}
    />
  );
};
