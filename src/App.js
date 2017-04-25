import React from 'react';
import Header from './Header';
import Options from './Options';
import OptionsCollection from './OptionsCollection';
import JudgmentModal from './JudgmentModal';
import HistoryBars from './HistoryBars';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userHistory: ['options'],
      currentHeader: '',
      currentOptions: '',
      judgmentObj: ''
    }
  }

  //on second argument in setState used in a few functions below:
  //basically, it's a callback that happens after you change the state

  traverseObject(object, array){
      var relevantPortion = object
       array.forEach(key => {
         relevantPortion = relevantPortion[key]
       })
      return relevantPortion
  }

  setUpNextQuestionAndOptions(relevantPortion) {
    //here is a bit of callback hell:
    this.setState({currentHeader: relevantPortion.headline},
      function(){
        var relevantPortion = this.traverseObject(this.props.sins, this.state.userHistory)
        this.setState(
          {currentOptions: relevantPortion.options},
          this.setState(
            {userHistory: this.state.userHistory.concat("options")}
          )
        )
      })
  }

  teeUpNextOptionSetOrJudgment = function(){
    var relevantPortion = this.traverseObject(this.props.sins, this.state.userHistory)
    if(relevantPortion.headline){
      this.setUpNextQuestionAndOptions(relevantPortion)
    } else {
      this.setState({judgmentObj: relevantPortion.punishmentObj})
    }
  }

  resetDisplayWithoutAlteringHistoryBars = function(userSelection){
    this.setState({userHistory: this.state.userHistory.concat(userSelection)},
      this.teeUpNextOptionSetOrJudgment)
    }

  resetDisplayByAlteringHistoryBars = function(userSelection) {
    //we now know that the selection comes from the history bars
    //we have to determine how much of the history bars to erase
    //by going through the sin object and finding when this collection occurs
    //then delete everything past that point in the history Array, sub in the selection
    //resetting the judgmentObj in case they had reached the end before altering course
    this.setState({judgmentObj: ''})
    var relevantPortion = this.props.sins
    this.state.userHistory.forEach((key, i, userHistory) => {
      relevantPortion = relevantPortion[key]
      if (Object.keys(relevantPortion).includes(userSelection)){
        this.setState({userHistory: this.state.userHistory.slice(0, i + 1).concat(userSelection)},
        this.teeUpNextOptionSetOrJudgment
      );
      }
    })

  }

  updateEntireState(text, historyButton){
    historyButton ?
    this.resetDisplayByAlteringHistoryBars(text) :
    this.resetDisplayWithoutAlteringHistoryBars(text)
  }

  componentWillMount(){
      this.setState({currentOptions: this.props.firstOptions,
      currentHeader: this.props.sins.headline})
  }

  setCurrentOptions(){
    this.setState({currentOption: this.selectButtons(this.props.sins.choices)})
  }

  render(){

        var currentSetOfOptions = <OptionsCollection header={this.state.currentHeader}
          currentOptions = {this.state.currentOptions}
          updateHistory = {this.updateEntireState.bind(this)} />

        var judgmentModal = <JudgmentModal judgmentObj={this.state.judgmentObj} />

        var judgmentIfDoneOptionsIfNot = (this.state.judgmentObj === "") ? currentSetOfOptions : judgmentModal

      return (
        <div>
          <HistoryBars historyArray={this.state.userHistory} sinsObject={this.props.sins}
            updateHistory = {this.updateEntireState.bind(this)}
          />
          {judgmentIfDoneOptionsIfNot}
        </div>
      )
  }
}


export default App
