import React from 'react';

import './event.css'

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
      <div className="event pt-3 pb-5 px-4 mb-3 border rounded-3 border-secondary">
        <div className="event-overview d-flex flex-column justify-content-between">
          <span className="event-location position-relative pb-2 ps-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#e2d36b" className="location-icon position-absolute start-0" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            {event.location}
          </span>
          <span className="event-name fs-5 fw-bold">{event.summary}</span>
        </div>
        <button
          className="toggle-details m-2 px-2 rounded "
          onClick={this.toggleDetails}
        >
          {this.state.detailStatus === 'hidden' ? 'Show Details' : 'Hide Details'}
        </button>
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

