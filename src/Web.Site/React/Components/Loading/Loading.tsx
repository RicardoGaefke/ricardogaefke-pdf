import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './Styles';

interface IProps {
  message?: string,
}

export default (props: IProps): React.ReactElement<IProps> => {
  const { message } = props;
  const classes = useStyles({});

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <CircularProgress
        size="5rem"
      />
      {message}
    </Grid>
  );
};
