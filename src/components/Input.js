import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Number from './Number';

export default props => (
<View style={styles.container}>
  <Number />
  <Number />
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
