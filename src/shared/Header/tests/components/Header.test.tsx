import { cleanup, render, screen } from '@testing-library/react';

import Header from '@shared/Header/components/Header';
import type { HeaderProps } from '@shared/Header/models';

const props: HeaderProps = { title: 'Header' };

describe('shared/components/Header', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<Header {...props} />);

    const header = screen.getByTestId('header');
    const titleContainer = screen.getByTestId('title');

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('header small');
    expect(header).toContainElement(titleContainer);
    expect(header.querySelector('header-left-side')).not.toBeInTheDocument();
    expect(header.querySelector('header-right-side')).not.toBeInTheDocument();

    expect(titleContainer).toHaveTextContent(props.title);
    expect(titleContainer).toHaveClass('header-title');
    expect(titleContainer.querySelector('h2.title')).toBeInTheDocument();
  });

  it('should renders the component with another height', () => {
    const newProps: HeaderProps = { ...props, height: 'medium' };

    render(<Header {...newProps} />);

    const header = screen.getByTestId('header');

    expect(header).toHaveClass('header medium');
  });

  it('should renders the component with children on the side', () => {
    const newProps: HeaderProps = {
      ...props,
      leftSideNode: <span>Left side</span>,
      rightSideNode: <span>Right side</span>,
    };

    render(<Header {...newProps} />);

    const header = screen.getByTestId('header');
    const leftSideNode = header.querySelector('.header-left-side');
    const rightSideNode = header.querySelector('.header-right-side');

    expect(leftSideNode).toBeInTheDocument();
    expect(leftSideNode).toContainHTML('<span>Left side</span>');

    expect(rightSideNode).toBeInTheDocument();
    expect(rightSideNode).toContainHTML('<span>Right side</span>');
  });
});
