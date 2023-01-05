import { render, screen } from '@testing-library/react';

import ShareLink from '@shared/ShareLink/components/ShareLink';
import type { ShareLinkProps } from '@shared/ShareLink/models';

const props: ShareLinkProps = { value: 'Text' };

describe('shared/components/ShareLink', () => {
  it('should render the component with only required props', () => {
    render(<ShareLink {...props} />);

    const shareLink = screen.getByTestId('share-link');
    const shareLinkValue = shareLink.querySelector('.share-link-value');

    expect(shareLink).toBeInTheDocument();
    expect(shareLink).toHaveClass('share-link');
    expect(shareLinkValue).toBeInTheDocument();
    expect(shareLinkValue).toHaveTextContent('Text');
  });

  it('should render the component with another class', () => {
    const newProps: ShareLinkProps = { ...props, className: 'share-link-other-class' };

    render(<ShareLink {...newProps} />);

    const shareLink = screen.getByTestId('share-link');

    expect(shareLink).toHaveClass('share-link share-link-other-class');
  });
});
