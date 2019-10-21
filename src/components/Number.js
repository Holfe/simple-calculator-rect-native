import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

export default props => (
  <TextInput 
    style={styles.number}
    value={props.num}
    onChangeText= {value => props.updateValue(props.name,value) }
  />
);

const styles = StyleSheet.create({
  number: {
    width: 150,
    height: 50,
    fontSize: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    padding: 5,
  }
});
