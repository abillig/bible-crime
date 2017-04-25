import React, {Component} from 'react';


export default class JudgmentModal extends React.Component {

render(){
      return (
        <div>
          <div className="punishment">
            {this.props.judgmentObj.punishment}
            </div>
            <div className="explanation">
            {this.props.judgmentObj.explanation}
            </div>
            <div className="explanation">
            <a href={this.props.judgmentObj.source_url}>
              {this.props.judgmentObj.source}
            </a>
            </div>
        </div>
      )
  }
}
