import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput
    placeholder='Result'
    editable={false}
    style={styles.text}
    value={props.res}
  />
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 120,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
