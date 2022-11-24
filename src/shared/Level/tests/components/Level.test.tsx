import { cleanup, render, renderHook, screen } from '@testing-library/react';

import Level from '@shared/Level/components/Level';
import type { LevelProps } from '@shared/Level/models';
import useTranslation from '@hooks/useTranslation';

const props: LevelProps = {
  currentXp: 200,
  showProgressBar: true,
  size: 'large',
  title: 'User name',
  totalXp: 1000,
};

describe('shared/components/Level', () => {
  const { result } = renderHook(() => useTranslation());
  const translate = result.current.translate;

  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<Level />);

    const level = screen.getByTestId('level');
    const progressBar = level.querySelector('.progress-bar');
    const image = screen.getByTestId('image');
    const imageElement = image.querySelector('img');

    expect(level).toBeInTheDocument();
    expect(level).toHaveClass('level medium');

    expect(progressBar).not.toBeInTheDocument();

    expect(level).toContainElement(image);
    expect(image).toHaveClass('badge image-fit-contain');
    expect(imageElement).toHaveAccessibleName(translate('badge.level.unknown'));
  });

  it('should renders the component with the progress bar', () => {
    render(<Level {...props} />);

    const level = screen.getByTestId('level');
    const progressBar = level.querySelector('.progress-bar');
    const progressBarTitle = level.querySelector('.progress-bar-title');
    const progressBarValue = level.querySelector('.progress-bar-value');
    const progressBarBackground = level.querySelector('.progress-bar-background');

    expect(progressBar).toBeInTheDocument();
    expect(progressBarTitle).toBeInTheDocument();
    expect(progressBarValue).toBeInTheDocument();
    expect(progressBarBackground).toBeInTheDocument();
    expect(progressBarTitle).toHaveTextContent('User name');
    expect(progressBarValue).toHaveTextContent('200/1000');
    expect(progressBarBackground).toHaveStyle({ width: '20%' });
  });

  it('should renders the component with bad current xp value', () => {
    const newProps: LevelProps = {
      ...props,
      currentXp: 1500,
      totalXp: 1000,
    };

    render(<Level {...newProps} />);

    const level = screen.getByTestId('level');
    const progressBarValue = level.querySelector('.progress-bar-value');
    const progressBarBackground = level.querySelector('.progress-bar-background');

    expect(progressBarValue).toHaveTextContent('1000/1000');
    expect(progressBarBackground).toHaveStyle({ width: '100%' });
  });

  it('should renders the component with bad total xp value', () => {
    const newProps: LevelProps = {
      ...props,
      currentXp: 1400,
      totalXp: 0,
    };

    render(<Level {...newProps} />);

    const level = screen.getByTestId('level');
    const progressBarValue = level.querySelector('.progress-bar-value');
    const progressBarBackground = level.querySelector('.progress-bar-background');

    expect(progressBarValue).toHaveTextContent('0/0');
    expect(progressBarBackground).toHaveStyle({ width: '0%' });
  });

  it('should renders the component with image badge', () => {
    const newProps: LevelProps = {
      ...props,
      badgeSrc: '/images/my-test-image.png',
    };

    render(<Level {...newProps} />);

    const image = screen.getByTestId('image');
    const imageElement = image.querySelector('img');

    expect(image).toHaveClass('badge image-fit-contain');
    expect(imageElement).toHaveAccessibleName(translate('badge.level', { number: '1' }));
  });
});
