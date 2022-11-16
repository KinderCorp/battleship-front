import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon arrow left component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconArrowLeft = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg arrow-left"
    data-testid="icon-arrow-left"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.0001 7.06192C36.0001 6.2267 35.0368 5.75952 34.381 6.27665L10.9961 24.7147C10.4883 25.1151 10.4883 25.8849 10.9961 26.2853L34.381 44.7234C35.0368 45.2405 36.0001 44.7733 36.0001 43.9381V7.06192Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M13.2303 25.5L34.0001 41.8762V9.12383L13.2303 25.5ZM34.381 6.27665C35.0368 5.75952 36.0001 6.2267 36.0001 7.06192V43.9381C36.0001 44.7733 35.0368 45.2405 34.381 44.7234L10.9961 26.2853C10.4883 25.8849 10.4883 25.1151 10.9961 24.7147L34.381 6.27665Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconArrowLeft;
