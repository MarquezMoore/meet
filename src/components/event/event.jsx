import React from 'react';
import { Button } from 'react-bootstrap';

class Event extends React.Component {
  constructor(props) {
    super();
    this.state = {
      detailStatus: null,
    }

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    console.log('Click Triggered')
    this.state.detailStatus
      ? this.setState({
        detailStatus: null
      })
      : this.setState({
        detailStatus: 'hidden'
      })
  }

  render() {

    return (
      <div className="event">
        <Button onClick={this.toggleDetails} className="show-details"/>
        <div hidden={this.state.detailStatus} className="details"></div>
      </div>
    );
  };
};

export default Event;

