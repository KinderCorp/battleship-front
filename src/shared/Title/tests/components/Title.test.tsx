import { act, cleanup, render, screen } from '@testing-library/react';

import Title from '@shared/Title/components/Title';
import type { TitleProps } from '@shared/Title/models';

const props: TitleProps = { title: 'Title' };

describe('shared/components/Title', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<Title {...props} />);

    const titleContainer = screen.getByTestId('title');
    const title = titleContainer.querySelector('h2.title');

    expect(titleContainer).toBeInTheDocument();
    expect(titleContainer).toHaveClass('title-container h2');
    expect(titleContainer).not.toHaveClass('has-icon');
    expect(titleContainer.querySelector('.title-content')).toBeInTheDocument();
    expect(titleContainer.querySelector('.subtitle')).not.toBeInTheDocument();
    expect(titleContainer.querySelector('.icon')).not.toBeInTheDocument();

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(props.title);
  });

  it('should renders the component with an icon', async () => {
    const newProps: TitleProps = { ...props, iconName: 'Boat' };

    await act(async () => {
      render(<Title {...newProps} />);
    });

    const titleContainer = screen.getByTestId('title');
    const titleContent = titleContainer.querySelector('.title-content');
    const iconBoat = screen.getByTestId('icon-boat');

    expect(titleContainer).toHaveClass('title-container h2 has-icon');
    expect(titleContent).toBeInTheDocument();
    expect(titleContent).toContainElement(iconBoat);
  });

  it('should renders the component with a subtitle', () => {
    const newProps: TitleProps = { ...props, subTitle: 'Sub-title' };

    render(<Title {...newProps} />);

    const titleContainer = screen.getByTestId('title');
    const subTitle = titleContainer.querySelector('p.subtitle');

    expect(subTitle).toBeInTheDocument();
    expect(subTitle).toHaveTextContent('Sub-title');
  });

  it('should renders the component with another class name', () => {
    const newProps: TitleProps = { ...props, className: 'title-other-class' };

    render(<Title {...newProps} />);

    const titleContainer = screen.getByTestId('title');

    expect(titleContainer).toHaveClass('title-container h2 title-other-class');
  });

  it('should renders the component with none type', () => {
    const newProps: TitleProps = { ...props, type: 'none' };

    render(<Title {...newProps} />);

    const titleContainer = screen.getByTestId('title');

    expect(titleContainer).toHaveClass('title-container none');
    expect(titleContainer.querySelector('p.title')).toBeInTheDocument();
  });
});
