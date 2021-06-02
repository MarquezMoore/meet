import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Event = () => {
  const [ detailStatus, setDetailStatus ] = useState('');

  const toggleDetails = () => {
    return detailStatus === '' ? setDetailStatus('hidden') : setDetailStatus('');
  }

  return (
    <div className="event">
      <Button onClick={toggleDetails} className="show-details"/>
      <div hidden={detailStatus} className="details"></div>
    </div>
  );
};

export default Event;

