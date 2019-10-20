import React from 'react';
import {Picker, StyleSheet} from 'react-native';

export default props => (
<Picker style={styles.container}>
  <Picker.item label='Sum' value='sum' />
  <Picker.item label='Subtraction' value='subtraction' />
</Picker>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },  
});
