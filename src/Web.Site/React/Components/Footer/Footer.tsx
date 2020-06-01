import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement<any> => {
  const classes = useStyles({});
  const date: Date = new Date();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Ricardo Gaefke &copy;
          {' '}
          {date.getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};
