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
  }

  render() {
    const { numOfEvents } = this.props;
    return (
      <div className="numOfEvents-header py-4 d-flex flex-row-reverse align-items-center">
        <input 
          type="text" 
          className="numOfEvents rounded text-align-center"
          onChange={this.handleChange}
          placeholder={numOfEvents}
        ></input>
        <span className="pe-2">Events displayed: </span>
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  };
}

export default NumOfEvents;