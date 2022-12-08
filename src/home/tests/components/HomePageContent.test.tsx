import { fireEvent, screen } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import HomePageContent from '@home/components/HomePageContent';
import renderWithProviders from '@core/utils/test.utils';

describe('home/components/HomePageContent', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderWithProviders(<HomePageContent />);
  });

  it('should renders component', () => {
    expect(component).toBeDefined();
  });

  xit('should simulate click to decrement value', () => {
    const paragraph = screen.getByTestId('container-value');
    expect(paragraph).toHaveTextContent('0');
    fireEvent.click(screen.getByText('-'));
    expect(paragraph).toHaveTextContent('-1');
  });

  xit('should simulate click to increment value', () => {
    const paragraph = screen.getByTestId('container-value');
    expect(paragraph).toHaveTextContent('0');
    fireEvent.click(screen.getByText('+'));
    expect(paragraph).toHaveTextContent('1');
  });
});
