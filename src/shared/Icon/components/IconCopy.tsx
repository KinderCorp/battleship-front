import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon copy component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconCopy = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg copy"
    data-testid="icon-copy"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.7334 8C6.7334 6.34315 8.07654 5 9.7334 5H32.889C34.5458 5 35.889 6.34315 35.889 8V36.6222C35.889 38.2791 34.5458 39.6222 32.889 39.6222H9.7334C8.07654 39.6222 6.7334 38.2791 6.7334 36.6222V8Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M32.889 7H9.7334C9.18112 7 8.7334 7.44772 8.7334 8V36.6222C8.7334 37.1745 9.18111 37.6222 9.7334 37.6222H32.889C33.4412 37.6222 33.889 37.1745 33.889 36.6222V8C33.889 7.44771 33.4412 7 32.889 7ZM9.7334 5C8.07654 5 6.7334 6.34315 6.7334 8V36.6222C6.7334 38.2791 8.07654 39.6222 9.7334 39.6222H32.889C34.5458 39.6222 35.889 38.2791 35.889 36.6222V8C35.889 6.34315 34.5458 5 32.889 5H9.7334Z"
      fill={borderColor}
      fillRule="evenodd"
    />
    <path
      d="M13.1113 14.3778C13.1113 12.721 14.4545 11.3778 16.1113 11.3778H39.2669C40.9237 11.3778 42.2669 12.721 42.2669 14.3778V43C42.2669 44.6569 40.9237 46 39.2669 46H16.1113C14.4545 46 13.1113 44.6569 13.1113 43V14.3778Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M39.2669 13.3778H16.1113C15.559 13.3778 15.1113 13.8255 15.1113 14.3778V43C15.1113 43.5523 15.559 44 16.1113 44H39.2669C39.8192 44 40.2669 43.5523 40.2669 43V14.3778C40.2669 13.8255 39.8192 13.3778 39.2669 13.3778ZM16.1113 11.3778C14.4545 11.3778 13.1113 12.721 13.1113 14.3778V43C13.1113 44.6569 14.4545 46 16.1113 46H39.2669C40.9237 46 42.2669 44.6569 42.2669 43V14.3778C42.2669 12.721 40.9237 11.3778 39.2669 11.3778H16.1113Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconCopy;