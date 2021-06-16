import React from 'react';
import { ErrorAlert } from '../alerts/alert'

import './numOfEvents.css';

class NumOfEvents extends React.Component {
  constructor(props) {
    super();
    this.state = {
      infoText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    const value = e.target.value;
    const numConstraint = new RegExp(/\b(0?[1-9]|[1-2][0-9]|3[0-2])\b/);
    
    if(!numConstraint.test(value)){
      this.setState({
        infoText: 'Enter number between 1 - 32'
      });
    }else {
      this.setState({
        infoText: ''
      });

      this.props.updateEvents( null, value)
    }
      // this.props.updateEvents( null, 100000);
  }

  render() {
    return (
      <div className="container">
        <input 
          type="text" 
          className="numOfEvents"
          placeholder="enter num of events"
          onChange={this.handleChange}
        ></input>
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  };
}

export default NumOfEvents;