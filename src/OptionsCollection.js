import React, {Component} from 'react';
import Options from './Options';
import Header from './Header';

export default class OptionsCollection extends React.Component {

render(){
      return (
        <div>
          <Header text={this.props.header}/>
          <Options optionCollection={this.props.currentOptions}
            updateHistory = {this.props.updateHistory}/>
        </div>
      )
  }
}
