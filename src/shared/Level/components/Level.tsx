import classNames from 'clsx';
import { useMemo } from 'react';

import type { LevelProps } from '@shared/Level/models';

/**
 * Level component.
 *
 * @param {LevelProps} props Props
 * @return {JSX.Element}
 */
const Level = ({
  className = '',
  currentXp = 0,
  rank = 0,
  showProgressBar = false,
  size = 'medium',
  title = '',
  totalXp = 0,
}: LevelProps): JSX.Element => {
  /**
   * Function to have the correct badge according to user level.
   *
   * @param {number | null} rank User rank
   * @return {JSX.Element}
   */
  // const getImageLevel = (rank: number | null) : JSX.Element => {
  //   switch(rank) {
  //     case 1:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 2:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 3:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 4:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 5:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 6:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 7:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 8:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 9:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     case 10:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //     default:
  //       return <Image src={defaultBadge} alt={'rankBadge'} width={size == 'small' ? 12 : size == 'medium' ? 40 : 80} height={size == 'small' ? 12 : size == 'medium' ? 40 : 80}/>
  //   }
  // }

  //   if (showProgressBar) {
  //     return (
  //       <div className="progress-bar-out">
  //         <div className="progress-bar-in" style={{ width: getWidth(progress) + '%' }} />
  //         <p>
  //           {progress < 0 ? 0 : progress > 100 ? maxXp : progress} / {maxXp}
  //         </p>
  //       </div>
  //     );
  //   } else {
  //     return <div></div>;
  //   }
  // };

  const levelClassName = useMemo(
    (): string => classNames('level', size, className),
    [className, size],
  );

  const progressValue = useMemo((): string => `${currentXp}/${totalXp}`, [currentXp, totalXp]);
  const progressWidth = useMemo(
    (): string => (totalXp ? `${(currentXp * 100) / totalXp}%` : '0%'),
    [currentXp, totalXp],
  );

  return (
    <div className={levelClassName} data-testid="level">
      <div className="badge">{rank}</div>

      {!!showProgressBar && (
        <div className="progress-bar">
          <span className="progress-bar-background" style={{ width: progressWidth }} />
          <p className="progress-bar-value">{progressValue}</p>
          <p className="progress-bar-title">{title}</p>
        </div>
      )}
    </div>
  );
};

export default Level;
