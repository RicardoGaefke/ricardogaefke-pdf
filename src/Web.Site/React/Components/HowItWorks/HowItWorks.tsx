import React from 'react';
import { useStateValue } from '../../Initial/Context/StateProvider';
import HomeContainer from '../HomeContainer/HomeContainer';
import English from './English';
import Portuguese from './Portuguese';

export default (): React.ReactElement => {
  const [{ Language }] = useStateValue();

  return (
    <HomeContainer>
      {(Language === 'ENG') ? <English /> : <Portuguese />}
    </HomeContainer>
  );
};
