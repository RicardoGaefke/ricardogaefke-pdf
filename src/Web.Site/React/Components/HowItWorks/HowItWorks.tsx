import React from 'react';
import { useStateValue } from '../../Initial/Context/StateProvider';
import HomeContainer from '../HomeContainer/HomeContainer';
import English from './English';
import useStyles from './Styles';

export default (): React.ReactElement => {
  const [{ Language }] = useStateValue();
  const classes = useStyles({});

  return (
    <HomeContainer>
      <div className={classes.container}>
        {(Language === 'ENG') ? <English /> : <div>PT</div>}
      </div>
    </HomeContainer>
  );
};
