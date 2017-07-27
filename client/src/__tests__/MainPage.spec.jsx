import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../components/main_page';

test('MainPage renders correctly', () => {
  const mainPage = shallow(<MainPage/>)
  expect(mainPage).toMatchSnapshot();
})