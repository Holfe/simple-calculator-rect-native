import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default props => (
<View style={styles.container}>
  <TextInput 
    placeholder='Result'
    editable={false}
    style={styles.text}
  />
</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
