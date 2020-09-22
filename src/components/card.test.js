import React from 'react';
import { shallow } from 'enzyme';
import data from '../api/data';
import Card from './card';

describe('Card component tests', () => {
    let i, x, y, rot, scale, trans, bind

    beforeEach(() => {
        i = 0;
        x = 100;
        y = 100;
        rot = 20;
        scale = 1;
        trans = jest.fn();
        bind = jest.fn();
    })

    it('renders a Card component with dislike', () => {
        const wrapper = shallow(
            <Card
                key={i}
                i={i}
                x={x}
                y={y}
                rot={rot}
                scale={scale}
                trans={trans}
                data={data[i]}
                bind={bind}
          />
        );

        expect(wrapper.find('[aria-label="profile"]')).toHaveLength(1);
        expect(wrapper.find('[aria-label="headshot"]')).toHaveLength(1);
        expect(wrapper.find('[aria-label="name"]').text()).toEqual("Dwayne Johnson");
        expect(wrapper.find('[aria-label="location"]').text()).toEqual("London");
        expect(wrapper.find('[aria-label="rate"]').text()).toEqual("Hourly rate £100");

        expect(wrapper.find('[aria-label="disliked"]')).toHaveLength(1);
        expect(wrapper.find('[aria-label="liked"]')).toHaveLength(0);
    });

    it('renders a Card component with like', () => {
        const likedData = data[i];
        likedData.liked = true;
        const wrapper = shallow(
            <Card
                key={i}
                i={i}
                x={x}
                y={y}
                rot={rot}
                scale={scale}
                trans={trans}
                data={likedData}
                bind={bind}
          />
        );
        expect(wrapper.find('[aria-label="disliked"]')).toHaveLength(0);
        expect(wrapper.find('[aria-label="liked"]')).toHaveLength(1);
    });
});

