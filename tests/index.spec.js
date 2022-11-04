/* eslint-disable no-undef */
import { mount, render, shallow } from 'enzyme';
import Home from './pages/index';
import React from 'react';


describe('<Home />', () => {
    it('renders the title', () => {
        const wrapper = shallow(<Home />);

    });
});
j