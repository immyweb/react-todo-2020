import * as React from 'react';

import { Loader } from '../loader/loader';
import { colours } from '../../styles/colours';

const LoadingScreen = () => {
  return (
    <div style={{ height: '300px' }}>
      <Loader backgroundColour={colours.$white} dotColour={colours.$football} />
    </div>
  );
};

export default LoadingScreen;
