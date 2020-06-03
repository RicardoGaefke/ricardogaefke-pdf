import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement<any> => {
  const classes = useStyles({});

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          <Link href="https://github.com/RicardoGaefke/ricardogaefke-pdf" title="GitHub Project" color="inherit" target="_blank">
            Ricardo Gaefke &copy; 2020
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};
