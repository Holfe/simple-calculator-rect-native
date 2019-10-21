import React from 'react';
import {View, StyleSheet} from 'react-native';

import Number from './Number';

export default props => (
  <View style={styles.container}>
    <Number num={props.num1} name="num1" updateValue={props.updateValue} />
    <Number num={props.num2} name="num2" updateValue={props.updateValue} />
  </View>
);

const styles = StyleSheet.create({
  container: {    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
