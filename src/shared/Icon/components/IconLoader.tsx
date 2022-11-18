import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon loader component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconLoader = ({ borderColor }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg icon-loader"
    data-testid="icon-loader"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M38.0001 21.5C39.9331 21.5 41.5001 23.067 41.5001 25C41.5001 34.1127 34.1128 41.5 25.0001 41.5C20.5681 41.5 16.5379 39.748 13.5766 36.906C12.1819 35.5676 12.1363 33.352 13.4747 31.9573C14.8131 30.5627 17.0288 30.5171 18.4234 31.8555C20.1337 33.4967 22.446 34.5 25.0001 34.5C30.2468 34.5 34.5001 30.2467 34.5001 25C34.5001 23.067 36.0671 21.5 38.0001 21.5Z"
      fill="url(#linear_gradient_icon_loader)"
      fillRule="evenodd"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="linear_gradient_icon_loader"
        x1="41"
        x2="18.5"
        y1="22"
        y2="18"
      >
        <stop offset="0.276042" stopColor={borderColor} />
        <stop offset="1" stopColor={borderColor} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default IconLoader;
