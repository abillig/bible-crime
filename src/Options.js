import React, {Component} from 'react';
import OptionButton from './OptionButton';



export default class Options extends React.Component {

render(){

  //don't remember distinction b/w object or array here. def due to complexity of sin object
  var whatToMap = Array.isArray(this.props.optionCollection) ? this.props.optionCollection : Object.keys(this.props.optionCollection)
  const optionsButtons = whatToMap.map(option => {
    return <OptionButton selectedForHistory = {this.props.selectedForHistory}
    updateHistory={this.props.updateHistory}
    text={option}/>;
  })

      return (
        <div className="optionButtonsContainer">
          <div className="optionButtons">
          {optionsButtons}
          </div>
        </div>
      )
  }
}
