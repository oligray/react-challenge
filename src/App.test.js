import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders Deck component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Deck').exists()).toBeTruthy();
});
