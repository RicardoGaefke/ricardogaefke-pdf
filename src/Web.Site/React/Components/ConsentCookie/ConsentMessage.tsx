import React from 'react';
import { Link as RLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';

interface IProps {
  message: string,
  text: string,
  title: string,
}

export default (props: IProps): React.ReactElement<IProps> => {
  const { message, text, title } = props;

  return (
    <>
      <Typography variant="body2">
        {message}
      </Typography>
      <Link
        underline="always"
        component={RLink}
        color="inherit"
        title={title}
        to="/Policy/"
      >
        {text}
      </Link>
    </>
  );
};
