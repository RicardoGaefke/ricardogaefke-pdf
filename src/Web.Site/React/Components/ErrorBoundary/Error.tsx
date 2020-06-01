import React from 'react';
import { Link as RLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

export interface IErrorProps {
  clearError: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export default (props: IErrorProps): React.ReactElement<any> => {
  const { clearError } = props;

  return (
    <Button
      title="Home page"
      variant="outlined"
      component={RLink}
      to="/"
      onClick={clearError}
    >
      Home Page
    </Button>
  );
};
