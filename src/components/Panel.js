import React from 'react';
import { View } from 'react-native';

import Input from './Input';
import Operation from './Operation';
import Command from './Command';

const Panel = props => (
  <View>
    <Input num1={props.num1} num2={props.num2} updateValue={props.updateValue} />
    <Operation option={props.option} updateOperation={props.updateOperation} />
    <Command calculate={props.calculate} />
  </View>
);

export { Panel } // No default export
