import { render, screen } from '@testing-library/react';

import TextContainer from '@shared/TextContainer/components/TextContainer';
import type { TextContainerProps } from '@shared/TextContainer/models';

const props: TextContainerProps = { value: 'Text' };

describe('shared/components/TextContainer', () => {
  it('should render the component with only required props', () => {
    render(<TextContainer {...props} />);

    const textContainer = screen.getByTestId('text-container');
    const textContainerValue = textContainer.querySelector('.text-container-value');

    expect(textContainer).toBeInTheDocument();
    expect(textContainer).toHaveClass('text-container');
    expect(textContainerValue).toBeInTheDocument();
    expect(textContainerValue).toHaveTextContent('Text');
  });

  it('should render the component with another class', () => {
    const newProps: TextContainerProps = { ...props, className: 'text-container-other-class' };

    render(<TextContainer {...newProps} />);

    const textContainer = screen.getByTestId('text-container');

    expect(textContainer).toHaveClass('text-container text-container-other-class');
  });
});
