import React, {Component} from 'react';


export default class Options extends React.Component {

  handleOnClick(e){
    var notifyIfHistoryButton = this.props.selectedForHistory ? true : false
    this.props.updateHistory(e.target.innerHTML, notifyIfHistoryButton)
  }


render(){
  if (this.props.selectedForHistory) {
    //all history bars regenerate each time, so we need to move through them
    //each time and identify selected button at each level.
    if (this.props.selectedForHistory.includes(this.props.text)) {
      var selectionClassAssignment = "selectedButton"
    } else {
      var selectionClassAssignment = "regularButton"
    }
  } else {
    var selectionClassAssignment = "regularButton"
  }
      return (
        <button className = {selectionClassAssignment} onClick={this.handleOnClick.bind(this)}>
          {this.props.text}
        </button>
      )
  }
}
