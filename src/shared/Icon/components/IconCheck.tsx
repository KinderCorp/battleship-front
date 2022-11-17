import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon check component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconCheck = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg icon-check"
    data-testid="icon-check"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.8516 32.1462L12.5026 24.994L10 27.4124L19.8516 37L41 16.4183L38.5151 14L19.8516 32.1462Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M19.8514 37L9.9998 27.4124L12.5024 24.994L19.8514 32.1461L38.5149 14L40.9998 16.4183L19.8514 37ZM19.8521 29.356L38.5155 11.2098L43.8674 16.4183L19.8514 39.7908L7.12695 27.4073L12.5073 22.208L19.8521 29.356Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconCheck;
