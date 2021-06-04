import React from 'react';
import { shallow } from 'enzyme';

import NumOfEvents from '../components/numOfEvents/numOfEvents';
import { numOfEvents } from '../api';

describe('<NumOfEvents /> component', () => {
  let NumOfEventsWrapper, input;

  beforeAll(() => {
    NumOfEventsWrapper = shallow(<NumOfEvents numOfEvents={numOfEvents} />)
    input = NumOfEventsWrapper.find('input');
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

  it('should contain onChange event handler', () => {
    expect(input.prop('onChange')).toBeTruthy();
  });

/*
  Post User Interaction
*/ 
  // To test the num of event I will need to factor in two component which requires integration testing I would think
});