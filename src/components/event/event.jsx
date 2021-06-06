import React from 'react';

import { Button } from 'react-bootstrap';

class Event extends React.Component {
  constructor(props) {
    super();
    this.state = {
      detailStatus: 'hidden',
    }

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    !this.state.detailStatus
      ? this.setState({
        detailStatus: 'hidden'
      })
      : this.setState({
        detailStatus: null
      })
  }

  render() {
    const { event } = this.props;
    return ( 
      <div className="event pt-3 pb-5 px-4 my-3 border rounded-3 border-secondary">
        <div className="event-overview d-flex justify-content-between align-items-center">
          <span className="fs-1">{event.summary}</span>
          <span className="fs-5">{event.location}</span>
        </div>
        <Button 
          className="toggle-details m-2"
          onClick={this.toggleDetails}
        >
          {this.state.detailStatus === 'hidden' ? 'Show Details' : 'Hide Details'}
        </Button>
        <div 
          hidden={this.state.detailStatus} 
          className="details">
          {event.description}
        </div>
      </div>
    );
  };
};

export default Event;

