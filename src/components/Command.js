import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default props => (
  <Button title='Calculate' color='#55f' onPress={() => props.calculate() } />
);
