import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon close component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconClose = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg icon-close"
    data-testid="icon-close"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37 14.6186L34.4821 12L24.5 22.3814L14.5179 12L12 14.6186L21.9821 25L12 35.3814L14.5179 38L24.5 27.6186L34.4821 38L37 35.3814L27.0179 25L37 14.6186Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M39.7747 14.6186L29.7926 25L39.7747 35.3814L34.4823 40.8855L24.5002 30.5041L14.518 40.8855L9.22559 35.3814L19.2077 25L9.22559 14.6186L14.518 9.11444L24.5002 19.4959L34.4823 9.11444L39.7747 14.6186ZM34.4823 12L37.0002 14.6186L27.018 25L37.0002 35.3814L34.4823 38L24.5002 27.6186L14.518 38L12.0002 35.3814L21.9823 25L12.0002 14.6186L14.518 12L24.5002 22.3814L34.4823 12Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconClose;
