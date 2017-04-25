

import React, {Component} from 'react';
import Options from './Options';


export default class HistoryBars extends React.Component {

render(){

  var historyBars = ''

  if (this.props.historyArray.length > 1){



    var historyBars=this.props.historyArray.map((key, i, historyArray) => {
    var theIndex=0
    var theRelevantSection=this.props.sinsObject

    //loop burrows into sins object, with each nested level being the current key
    while(theIndex < i + 1){
      theRelevantSection = theRelevantSection[historyArray[theIndex]]
          theIndex += 1
    }
    if(key === "options" && theIndex < historyArray.length){
      return <Options optionCollection={theRelevantSection}
          updateHistory = {this.props.updateHistory}
          selectedForHistory = {historyArray}
      />
    }

    var theIndex = 0
    return ''

  })
  } else {
    var historyBars=""
  }



      return (
        <div className="historySection">
          {historyBars}
        </div>
      )
  }
}
