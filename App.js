import React from 'react';
import { View } from 'react-native';

import {Top, Result, Panel} from './src/components';

const App = () => {
  return (
    <View>
      <Top />
      <Result />
      <Panel />
    </View>
  );
}

export default App;
