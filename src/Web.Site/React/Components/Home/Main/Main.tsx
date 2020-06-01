import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import useStyles from './Styles';

export default (): React.ReactElement => {
  const classes = useStyles({});
  const [{ Language }] = useStateValue();

  return (
    <Container className={classes.container}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            variant="h4"
            align="center"
          >
            {Language}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
