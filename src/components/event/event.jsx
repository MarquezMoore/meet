import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super();
    this.state = {
      detailStatus: null,
    }

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.state.detailStatus
      ? this.setState({
        detailStatus: null
      })
      : this.setState({
        detailStatus: 'hidden'
      })
  }

  render() {
    const { event } = this.props;
    return ( 
      <div className="event">
        <div className="event-overview">
          {/* <h1>{event.summary}</h1> */}
        </div>
        <button onClick={this.toggleDetails} className="show-details"/>Show Details<button />
        <div hidden={this.state.detailStatus} className="details">
          {/* {event.description} */}
        </div>
      </div>
    );
  };
};

export default Event;

