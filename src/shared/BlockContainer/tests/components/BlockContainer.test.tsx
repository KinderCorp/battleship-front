import { act, cleanup, render, screen } from '@testing-library/react';

import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import type { BlockContainerProps } from '@shared/BlockContainer/models';

const props: BlockContainerProps = { children: '',  title: 'block-container'  };
describe('shared/components/BlockContainer', () => {
    afterEach(() => {
      cleanup();
    });

    it('should renders the expected component', () => {
        render(<BlockContainer {...props} />);
    
        const BlockComponentContainer = screen.getByTestId('block-container');
        const block = BlockComponentContainer.querySelector('');

        expect(BlockComponentContainer).toBeInTheDocument();
        expect(block).toHaveClass('block-container');

        expect(block).toBeInTheDocument();
        expect(block).toHaveClass('block-container');
      });
});  