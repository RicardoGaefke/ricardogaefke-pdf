import React from 'react';
import { useStateValue } from '../../Initial/Context/StateProvider';
import HomeContainer from '../HomeContainer/HomeContainer';

export default (): React.ReactElement => {
  const [{ Language }] = useStateValue();

  return (
    <HomeContainer>
      <>
        {`How it works ${Language}`}
      </>
    </HomeContainer>
  );
};
