import { shallow, ShallowWrapper } from 'enzyme';

// Components
import HomePage from '@home/components/HomePage';
import Layout from '@shared/Layout/components/Layout';

describe('Layout', () => {
  let component: ShallowWrapper<typeof Layout>;

  beforeEach(() => {
    component = shallow(
      <Layout>
        <HomePage />
      </Layout>,
    );
  });

  it('should renders component', () => {
    expect(component).toBeDefined();
  });

  it('should renders the expected component', () => {
    expect(component.find(HomePage)).toHaveLength(1);
  });
});
