import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

// Components
import HomePage from '@home/components/HomePage';

describe('HomePage', () => {
  let component: ShallowWrapper<typeof HomePage>;

  beforeEach(() => {
    component = shallow(<HomePage />);
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
