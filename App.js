import React from 'react';
import { View } from 'react-native';

import {Top, Result, Panel} from './src/components';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { num1: '', num2: '', op: 'sum', result : '' };

    this.calculate = this.calculate.bind(this); // Lexico context, execute with root state, not with context state
    this.updateValue = this.updateValue.bind(this); // """"""""""
    this.updateOperation = this.updateOperation.bind(this);// """"""""""
  }

  calculate(){
    let res = 0;

    switch(this.state.op){
      case 'sum':
        res = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'sub':
        res = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default:
        res = 0;
    }    

    this.setState({result : res.toString()});

    console.log(this.state.num1);
    console.log(this.state.num2);
    console.log(this.state.op);
    console.log(this.state.result);
    
  }

  updateValue(name,value){
    const obj = {};
    obj[name] = value; // define key/value
    this.setState(obj);
  }

  updateOperation(op){
    this.setState({op}); // Same names operation:operation
  }

  render() {
    return (
      <View>
        <Top />
        <Result res={this.state.result} />
        <Panel 
          num1={this.state.num1}
          num2={this.state.num2}
          option={this.state.op}
          updateOperation={this.updateOperation}
          updateValue={this.updateValue}
          calculate={this.calculate}
        />
      </View>
    );
  }
}
