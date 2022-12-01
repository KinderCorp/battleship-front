import type { GamePageContentProps } from '@game/models';

/**
 * Game page content component.
 *
 * @param {GamePageContentProps} props Props
 * @return {JSX.Element}
 */
const GamePageContent = ({ gameId }: GamePageContentProps): JSX.Element => {
  return <p>{gameId}</p>;
};

export default GamePageContent;
