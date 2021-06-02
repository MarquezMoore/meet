import React from 'react';
import { shallow } from 'enzyme';

import NumOfEvents from '../components/numOfEvents/numOfEvents';
import { numOfEvents } from '../api';

describe('<NumOfEvents /> component', () => {
  let Wrapper;

  beforeAll(() => {
    Wrapper = shallow(<NumOfEvents numOfEvents={numOfEvents} />)
  })

  it('should contain use input', () => {
    expect(Wrapper.find('input')).toHaveLength(1);
  });

  

  // it('should contain child element to hold number of events', () => {
  //   expect(Wrapper.find('.numOfEvents')).toHaveLength(1);
  // });
});