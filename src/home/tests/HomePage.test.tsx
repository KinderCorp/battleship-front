import { shallow, ShallowWrapper } from 'enzyme';

// Components
import HomePage from '@home/components/HomePage';

describe('HomePage', () => {
  let component: ShallowWrapper<typeof HomePage>;

  beforeEach(() => {
    component = shallow(<HomePage />);
  });

  it('should renders component', () => {
    expect(component).toBeDefined();
  });

  it('should renders the expected component', () => {
    const paragraph = component.find('p');

    expect(paragraph).toHaveLength(1);
    expect(paragraph.render().text()).toBe('HomePage');
  });
});
