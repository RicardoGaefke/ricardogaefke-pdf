import React from 'react';
import { useStateValue } from '../../Initial/Context/StateProvider';
import HomeContainer from '../HomeContainer/HomeContainer';
import English from './English';

export default (): React.ReactElement => {
  const [{ Language }] = useStateValue();

  return (
    <HomeContainer>
      {(Language === 'ENG') ? <English /> : <div>PT</div>}
    </HomeContainer>
  );
};
