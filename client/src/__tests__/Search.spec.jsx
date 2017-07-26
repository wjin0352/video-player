import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../components/search_bar';

// test is global jest function
test('Search renders correctly', () => {
  const component = renderer.create(<SearchBar/>)
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
