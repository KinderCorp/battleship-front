import type { RenderResult } from '@testing-library/react';

import HomePage from '@home/components/HomePage';
import renderWithProviders from '@core/utils/test.utils';

describe('home/components/HomePage', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderWithProviders(<HomePage />);
  });

  it('should renders component', () => {
    expect(component).toBeDefined();
  });
});
