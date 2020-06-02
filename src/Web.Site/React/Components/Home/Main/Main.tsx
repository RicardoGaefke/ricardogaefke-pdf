import React from 'react';
import {
  Container, Grid, Paper, Divider,
} from '@material-ui/core';
import useStyles from './Styles';
import Form from '../Form/Form.Context';

export default (): React.ReactElement => {
  const classes = useStyles({});

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
            <Divider />
            <Form />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
