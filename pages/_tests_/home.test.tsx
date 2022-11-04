import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

// Components
import Home from '@pages/index';

describe('Home', () => {
  let component: ShallowWrapper<typeof Home>;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('renders component', () => {
    expect(component).toBeDefined();
  });

  it('renders the expected component', () => {
    const paragraph = component.find('p');

    expect(paragraph).toHaveLength(1);
    expect(paragraph.render().text()).toBe('HomePage');
  });
});
