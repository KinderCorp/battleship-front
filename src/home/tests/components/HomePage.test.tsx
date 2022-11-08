import { fireEvent, screen } from '@testing-library/react';
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

  it('should simulate click to decrement value', () => {
    const paragraph = screen.getByTestId('container-value');
    expect(paragraph).toHaveTextContent('0');
    fireEvent.click(screen.getByText('-'));
    expect(paragraph).toHaveTextContent('-1');
  });

  it('should simulate click to increment value', () => {
    const paragraph = screen.getByTestId('container-value');
    expect(paragraph).toHaveTextContent('0');
    fireEvent.click(screen.getByText('+'));
    expect(paragraph).toHaveTextContent('1');
  });
});
