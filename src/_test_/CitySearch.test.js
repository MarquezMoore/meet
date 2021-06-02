import React from 'react';
import { shallow } from 'enzyme';

import CitySearch from '../components/citySearch/citySearch'
import mockData from '../mock-data'
import { extractLocations } from '../api'

describe('<CitySearch /> Component', () => {
  let Wrapper, locations;

  beforeAll(() => {
    locations = extractLocations(mockData);
    Wrapper = shallow(<CitySearch locations={locations} />)
  });

  it('has input control', () => {
    expect(Wrapper.find('.city-search')).toHaveLength(1);
  });

  it('rendered a list of suggestions', () => {
    expect(Wrapper.find('.suggestions')).toHaveLength(1);
  });

  it('rendered test input correctly?', () => {
    const query = Wrapper.state('query');
    expect(Wrapper.find('.city-search').prop('value')).toBe(query);
  });

  it('change state when text input changes', () => {
    Wrapper.setState({
      query: 'Munich'
    });
    const eventObject = { target: { value: 'Berlin' }};
    Wrapper.find('.city-search').simulate('change', eventObject);
    expect(Wrapper.state('query')).toBe('Berlin');
  });

  it('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    Wrapper.setState({ suggestions: locations });
    const suggestions = Wrapper.state('suggestions');
    expect(Wrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(Wrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  it('suggestion list match the query when changed', () => {
    Wrapper.setState({ query: '', suggestions: [] });
    Wrapper.find(".city-search").simulate("change", {
      target: { value: "Berlin" },
    });
    const query = Wrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(Wrapper.state("suggestions")).toEqual(filteredLocations);
  });
  /*
  */ 
  it("selecting a suggestion should change query state", () => {
    Wrapper.setState({
      query: 'Berlin'  });
    const suggestions = Wrapper.state('suggestions');
    Wrapper.find('.suggestions li').at(0).simulate('click');
    expect(Wrapper.state("query")).toBe(suggestions[0]);
  });
});