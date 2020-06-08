import React from 'react';
import {
  Container, Grid, Paper,
} from '@material-ui/core';
import useStyles from './Styles';

interface IProps {
  children: React.ReactElement,
}

export default (props: IProps): React.ReactElement => {
  const classes = useStyles({});
  const { children } = props;

  return (
    <Container className={classes.container}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Paper elevation={3}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
