import React from 'react';
import { shallow } from 'enzyme';

import NumOfEvents from '../components/numOfEvents/numOfEvents';
import { numOfEvents } from '../api';

describe('<NumOfEvents /> component', () => {
  let Wrapper, input, button;

  beforeAll(() => {
    Wrapper = shallow(<NumOfEvents numOfEvents={numOfEvents} />)
    input = Wrapper.find('input');
    button = Wrapper.find('Button');
  });
/*
  Pre User Interaction
*/ 
  it('should contain use input', () => {
    expect(input).toHaveLength(1);
  });

  it('should input type of text', () => {
    expect(input.find({type: 'text'})).toHaveLength(1);
  });

  it('sould container button for user to submit num of events to view', () => {
    expect(button).toHaveLength(1);
  });
/*
  Post User Interaction
*/ 
  // To test the num of event I will need to factor in two component which requires integration testing I would think
});