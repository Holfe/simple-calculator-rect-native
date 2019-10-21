import React from 'react';
import {Picker, StyleSheet} from 'react-native';

export default class Operation extends React.Component {  // Export Default
  render() {
    return(
      <Picker 
      style={styles.container}
      selectedValue={this.props.option}
      onValueChange={ op => { this.props.updateOperation(op) } } // Need to be execute on Panel context
      >
        <Picker.Item label='Sum' value='sum' />
        <Picker.Item label='Subtraction' value='sub' />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },  
});
