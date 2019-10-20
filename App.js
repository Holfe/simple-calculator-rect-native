import React from 'react';
import { View } from 'react-native';


import Top from './src/components/Top';
import Result from './src/components/Result';
import Panel from './src/components/Panel';

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
