import { act, cleanup, render, screen } from '@testing-library/react';

import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import type { BlockContainerProps } from '@shared/BlockContainer/models';

const props: BlockContainerProps = { children: <p>Text</p> };

describe('shared/components/BlockContainer', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the component with only required props', () => {
    render(<BlockContainer {...props} />);

    const blockContainer = screen.getByTestId('block-container');
    const content = blockContainer.querySelector('.block-container-content');

    expect(blockContainer).toBeInTheDocument();
    expect(blockContainer).toHaveClass('block-container');
    expect(blockContainer.querySelector('.block-container-title')).not.toBeInTheDocument();
    expect(content).toContainHTML('<p>Text</p>');
  });

  it('should render the component with a title', async () => {
    const localProps: BlockContainerProps = {
      ...props,
      iconName: 'Share',
      title: 'Title',
    };

    await act(async () => {
      render(<BlockContainer {...localProps} />);
    });

    const blockContainer = screen.getByTestId('block-container');
    const titleContainer = screen.getByTestId('title');
    const title = titleContainer.querySelector('h2.title');
    const iconShare = screen.getByTestId('icon-share');

    expect(blockContainer).toBeInTheDocument();
    expect(blockContainer).toContainElement(titleContainer);

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('h2');
    expect(title).toHaveTextContent('Title');
    expect(titleContainer).toContainElement(iconShare);
  });

  it('should render the component with another class name', () => {
    const localProps: BlockContainerProps = {
      ...props,
      className: 'block-container-other-class',
    };

    render(<BlockContainer {...localProps} />);

    const blockContainer = screen.getByTestId('block-container');

    expect(blockContainer).toBeInTheDocument();
    expect(blockContainer).toHaveClass('block-container block-container-other-class');
  });
});
