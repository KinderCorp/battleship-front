import type { RenderResult } from '@testing-library/react';

import HomePage from '@home/components/HomePage';
import Layout from '@shared/Layout/components/Layout';
import renderWithProviders from '@core/utils/test.utils';

describe('shared/components/Layout', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderWithProviders(
      <Layout>
        <HomePage />
      </Layout>,
    );
  });

  it('should renders component', () => {
    expect(component).toBeDefined();
  });
});
