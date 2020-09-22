import React from 'react';
import { shallow } from 'enzyme';
import data from '../api/data';
import Deck from './deck';

describe('Deck component tests', () => {

    it('renders the Deck of Cards', () => {
        const wrapper = shallow(<Deck data={data}/>);
        expect(wrapper.find('Card').length).toEqual(3);
    });
});

