import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon add component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconAdd = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg add"
    data-testid="icon-add"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.5837 27.0834H27.0837V39.5834H22.917V27.0834H10.417V22.9167H22.917V10.4167H27.0837V22.9167H39.5837V27.0834Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M41.5837 29.0834H29.0837V41.5834H20.917V29.0834H8.41699V20.9167H20.917V8.41669H29.0837V20.9167H41.5837V29.0834ZM27.0837 22.9167V10.4167H22.917V22.9167H10.417V27.0834H22.917V39.5834H27.0837V27.0834H39.5837V22.9167H27.0837Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconAdd;
