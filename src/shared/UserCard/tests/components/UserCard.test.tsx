import { act, cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react';

import UserCard from '@shared/UserCard/components/UserCard';
import type { UserCardProps } from '@shared/UserCard/models';
import useTranslation from '@hooks/useTranslation';

describe('shared/components/UserCard', () => {
  const { result } = renderHook(() => useTranslation());
  const translate = result.current.translate;

  afterEach(() => {
    cleanup();
  });

  it('should render the component for guest player', async () => {
    const localProps: UserCardProps = {
      characterName: 'Sam',
      characterSrc: '/images/image-test-character.png',
      name: 'Player_487',
      onClick: jest.fn(),
    };

    await act(async () => {
      render(<UserCard {...localProps} />);
    });

    const userCard = screen.getByTestId('user-card');
    const level = screen.getByTestId('level');
    const levelImage = screen.getAllByTestId('image')[0];
    const characterImage = screen.getAllByTestId('image')[1];
    const button = screen.getByTestId('button');
    const iconPen = screen.getByTestId('icon-pen');
    const useCardContent = userCard.querySelector('.user-card-content');
    const characterImageElement = characterImage.querySelector('img');
    const levelImageElement = levelImage.querySelector('img');

    expect(userCard).toBeInTheDocument();
    expect(userCard).toHaveClass('user-card user-card--size-large user-card--direction-right');
    expect(userCard).not.toHaveClass('user-card--is-loading');

    expect(userCard.querySelector('.user-card-loader')).not.toBeInTheDocument();
    expect(useCardContent).toContainElement(level);
    expect(useCardContent).toContainElement(characterImage);
    expect(level).toHaveClass('medium');
    expect(characterImage).toHaveClass('image-fit-contain');
    expect(characterImageElement).toHaveAccessibleName(translate('skin', { name: 'Sam' }));
    expect(characterImageElement).toHaveAttribute('sizes', '250px');
    expect(levelImageElement).toHaveAccessibleName(translate('badge.level.unknown'));

    expect(userCard.querySelector('.user-card-name')).toHaveTextContent('Player_487');
    expect(button).toHaveClass('small none');
    expect(button).toContainElement(iconPen);

    fireEvent.click(button);
    expect(localProps.onClick).toBeCalledTimes(1);
  });

  it('should render the component for logged player', async () => {
    const localProps: UserCardProps = {
      badgeSrc: '/images/image-test-badge.png',
      characterName: 'Warrior',
      characterSrc: '/images/image-test-character.png',
      name: 'John Doe',
      rank: 2,
    };

    await act(async () => {
      render(<UserCard {...localProps} />);
    });

    const userCard = screen.getByTestId('user-card');
    const levelImage = screen.getAllByTestId('image')[0];
    const levelImageElement = levelImage.querySelector('img');

    expect(userCard).toBeInTheDocument();
    expect(levelImageElement).toHaveAccessibleName(translate('badge.level', { number: '2' }));
    expect(userCard.querySelector('.user-card-name')).toHaveTextContent('John Doe');
    expect(userCard.querySelector('.user-card-info .button')).not.toBeInTheDocument();
  });
});
