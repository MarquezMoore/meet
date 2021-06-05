import React from 'react';


class NumOfEvents extends React.Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    if(e.target.value > 0){
      this.props.updateEvents( null, e.target.value);
      console.log('Change to: '+e.target.value)
    }else{
      this.props.updateEvents( null, 100000)
    }
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