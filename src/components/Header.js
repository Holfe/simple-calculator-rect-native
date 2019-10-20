import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => (
<View style={styles.container}>
  <Text style={styles.title}>Calculator 1.0</Text>
</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#55f',
    padding: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
