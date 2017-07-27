import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/search_bar';
import MainPage from '../components/main_page';
import VideoList from '../components/video_list';

// test is global jest function
test('Searchbar renders correctly', () => {
  const component = shallow(<SearchBar/>)
  expect(component).toMatchSnapshot();
});



