import { cleanup, render, renderHook, screen } from '@testing-library/react';

import useTranslation from '@hooks/useTranslation';
import Versus from '@shared/Versus/components/Versus';
import type { VersusProps } from '@shared/Versus/models';

describe('shared/components/Versus', () => {
  const { result } = renderHook(() => useTranslation());
  const translate = result.current.translate;

  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<Versus />);

    const versus = screen.getByTestId('versus');
    
    expect(versus).toBeInTheDocument();
    expect(versus).toHaveClass('medium');
    expect(versus).toHaveTextContent(translate('versus'));
  });

  it('should render the component with another size', () => {
    const localProps: VersusProps = {
      size: 'large',
    };

    render(<Versus {...localProps} />);

    const versus = screen.getByTestId('versus');

    expect(versus).toBeInTheDocument();
    expect(versus).toHaveClass('large');
  });

  it('should render the component with another class name', () => {
    const localProps: VersusProps = {
      className: 'versus-other-class',
    };

    render(<Versus {...localProps} />);

    const versus = screen.getByTestId('versus');

    expect(versus).toBeInTheDocument();
    expect(versus).toHaveClass('versus-other-class');
  });
});