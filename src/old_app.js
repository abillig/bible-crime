import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      options: "",
      results: ""
    };
  }

  nextLevel(e) {
    function selections(object){
        if(object.punishmentObj){
          return {results: object.punishmentObj}
        }
        if(object.headline){
       return  {headline: object.headline, options: object}
      } else{
       return  {options: object}
      }
    }
    e.preventDefault();
       this.setState(
         selections(this.props.object)
         )
    }


render(){


  return (
    <div>
      <div id="button" object={this.props.object} onClick={this.nextLevel.bind(this)}>{this.props.name}</div>
    <h1>{this.state.headline}</h1>
    <Options sins={this.state.options}/>
    <Results infoObj={this.state.results}/>
    </div>
  )
}
}

class Results extends React.Component {

render(){
  const infoObj= this.props.infoObj

      return (
        <div className="modal-window">
          <h1>{infoObj.punishment}</h1>
          <h3>{infoObj.explanation}</h3>
          <a href={infoObj.source_url}>{infoObj.source}</a>
        </div>
      )
  }
}


class Options extends React.Component {
  objParse(object){

    // const next = function nextLevel() {
    //   // debugger;
    //   return <QandA object={this.props.sinObject}></QandA>
    // }

    Object.assign({}, crimes.options, for(var category in crimes.options){
      return category
    })

    var jsxButonCollection =[]
    for (var header in object) {
      if(header === "options"){
        for (var sinName in object[header]) {
        jsxButonCollection.push(<Button object={object[header][sinName]} name={sinName} ></Button>)
        }
      } else{
        jsxButonCollection.push(<h1>{object[header]}</h1>)
      }
    }
    return jsxButonCollection
  }

render(){
const object=this.props.sins
const headers = this.objParse(object)

      return (
        <div>
          {headers}
        </div>
      )
  }
}



class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     txt: 'this is the state txt'
  //   }
  // }
  //
  // update(e){
  //   this.setState({txt: e.target.value})
  // }

  render(){
// debugger;
    // let txt = this.props.txt
    return (
      <div>
        <Options sins={this.props.sins}/>
      </div>
    )
  }
}





// const Button = (props) => <button>{props.children}</button>

// const Widget = (props) =>
//     <input type="text" onChange={props.update}/>

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: "this is the default txt"
// }

//FUNCTIONAL
// const App = () => <h1>Hello stateless</h1>


// getQuestionsByIndex(idx, categories){
//     var questionRow = []
//       categories.forEach(category => {
//         var first_key = Object.keys(category)[0]
//         questionRow.push(category[first_key][idx])
//       }
//     )
//
//     return questionRow.map(quesObj => {
//       if (quesObj.active){
//           return (<CellContainer key={quesObj.id} content={quesObj.content} isActive={quesObj.active} boardId={this.props.params.id}
//           difficulty={quesObj.difficulty} id={quesObj.id}/>)}
//       return (<InactiveCell key={quesObj.id} difficulty={quesObj.difficulty} />)
//     })
//   }

// class QandA extends React.Component {
//  debug(){
//
//  }
//
// render(){
//   debugger;
//   return <p>oh</p>
// }
// }


export default App
