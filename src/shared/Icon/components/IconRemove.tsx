import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon remove component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconRemove = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg icon-remove"
    data-testid="icon-remove"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M39.5837 27.0834H10.417V22.9167H39.5837V27.0834Z" fill={color} />
    <path
      clipRule="evenodd"
      d="M41.5837 29.0834H8.41699V20.9167H41.5837V29.0834ZM39.5837 27.0834V22.9167H10.417V27.0834H39.5837Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconRemove;
