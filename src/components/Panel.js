import React from 'react';
import {View} from 'react-native';

import Input from './Input';
import Operation from './Operation';
import Command from './Command';

const Panel = () => (
<View>
  <Input />
  <Operation />
  <Command />
</View>
);

export { Panel };
