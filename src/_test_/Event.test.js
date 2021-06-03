import React from 'react';
import { shallow, mount } from 'enzyme';

import Event from '../components/event/event'

describe('<Event /> Component', () => {
  let EventWrapper, event, showDetails, details; 

  beforeAll(() => {
    EventWrapper = shallow(<Event />);
    event = EventWrapper.find('.event');
    showDetails = event.find('.show-details');
    details = EventWrapper.find('.details');
  });
/*
  Pre User Interactions
*/ 
  it('should contain details container', () => {
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  it('should contain show details button', () => {
    expect(event.find('.show-details')).toBeTruthy();
  });

  it('should show details closed per default', () => {
    expect(details.prop('hidden')).toEqual(null);
  });

/*
  Post User Interactions
*/ 
  it('should show details when user clicks show-details button', () => {
    console.log(details.props());
    showDetails.simulate('click');
    console.log(details.props());
    expect(EventWrapper.state('detailStatus')).toEqual('hidden');
  });
});