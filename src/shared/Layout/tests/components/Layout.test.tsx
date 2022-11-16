import HomePage from '@home/components/HomePage';
import Layout from '@shared/Layout/components/Layout';
import renderWithProviders from '@core/utils/test.utils';

describe('shared/components/Layout', () => {
  it('should renders component', () => {
    const component = renderWithProviders(
      <Layout>
        <HomePage />
      </Layout>,
    );
    expect(component).toBeDefined();
  });
});
