import React from 'react';


class NumOfEvents extends React.Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.props.updateEvents( null, e.target.value);
  }

  render() {
    return (
      <div className="container">
        <input 
          type="text" 
          className="numOfEvents"
          onChange={this.handleChange}
        ></input>
      </div>
    );
  };
}

export default NumOfEvents;