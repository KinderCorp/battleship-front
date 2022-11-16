import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon people component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconPeople = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg people"
    data-testid="icon-people"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 25C30.5228 25 35 20.5228 35 15C35 9.47715 30.5228 5 25 5C19.4772 5 15 9.47715 15 15C15 20.5228 19.4772 25 25 25Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M25 27.5C18.325 27.5 5 30.85 5 37.5V45H45V37.5C45 30.85 31.675 27.5 25 27.5Z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M25 23C29.4183 23 33 19.4183 33 15C33 10.5817 29.4183 7 25 7C20.5817 7 17 10.5817 17 15C17 19.4183 20.5817 23 25 23ZM8.54278 34.6017C7.44896 35.6113 7 36.5721 7 37.5V43H43V37.5C43 36.5721 42.551 35.6113 41.4572 34.6017C40.3498 33.5797 38.7201 32.6483 36.7594 31.8628C32.8347 30.2906 28.0875 29.5 25 29.5C21.9125 29.5 17.1653 30.2906 13.2406 31.8628C11.2799 32.6483 9.65019 33.5797 8.54278 34.6017ZM45 37.5C45 30.85 31.675 27.5 25 27.5C18.325 27.5 5 30.85 5 37.5V45H45V37.5ZM35 15C35 20.5228 30.5228 25 25 25C19.4772 25 15 20.5228 15 15C15 9.47715 19.4772 5 25 5C30.5228 5 35 9.47715 35 15Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconPeople;
