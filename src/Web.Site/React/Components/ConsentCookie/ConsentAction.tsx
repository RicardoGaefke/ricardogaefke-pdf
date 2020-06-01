import React from 'react';
import { Button } from '@material-ui/core';

interface IProps {
  text: string,
  title: string,
  close: () => void,
}

export default (props: IProps): React.ReactElement<IProps> => {
  const { text, title, close } = props;

  return (
    <Button
      color="primary"
      size="small"
      variant="contained"
      title={title}
      onClick={close}
    >
      {text}
    </Button>
  );
};
