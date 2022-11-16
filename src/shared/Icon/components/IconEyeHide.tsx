import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon eye hide component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconEyeHide = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg icon-eye-add"
    data-testid="icon-eye-add"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.8573 24.5454C42.4516 16.1553 34.2704 10.738 25.0048 10.738C15.7391 10.738 7.54836 16.1553 4.1427 24.5454L4 24.8946L4.1427 25.2533C7.54836 33.634 15.7391 39.0512 25.0048 39.0512C34.2704 39.0512 42.4516 33.634 45.8573 25.2533L46 24.8946L45.8573 24.5454ZM25.0048 37.1637C16.6428 37.1637 9.25119 32.3599 6.05481 24.8946C9.25119 17.4294 16.6523 12.6256 25.0048 12.6256C33.3572 12.6256 40.7488 17.4294 43.9452 24.8946C40.7488 32.3599 33.3572 37.1637 25.0048 37.1637Z"
      fill={borderColor}
    />
    <path
      d="M25.0046 12.6257C16.6522 12.6257 9.25106 17.4295 6.05469 24.8948C9.25106 32.36 16.6427 37.1638 25.0046 37.1638C33.3571 37.1638 40.7487 32.36 43.9451 24.8948C40.7487 17.4295 33.3571 12.6257 25.0046 12.6257ZM25.0046 34.6534C19.4681 34.6534 14.9684 30.2743 14.9684 24.8948C14.9684 19.5247 19.4681 15.1456 25.0046 15.1456C30.5317 15.1456 35.0314 19.5247 35.0314 24.8948C35.0314 30.2743 30.5317 34.6534 25.0046 34.6534Z"
      fill={color}
    />
    <path
      d="M25.005 15.1456C19.4684 15.1456 14.9688 19.5247 14.9688 24.8948C14.9688 30.2743 19.4684 34.6534 25.005 34.6534C30.5321 34.6534 35.0317 30.2743 35.0317 24.8948C35.0317 19.5247 30.5321 15.1456 25.005 15.1456ZM25.005 32.7659C20.5148 32.7659 16.8714 29.2362 16.8714 24.8948C16.8714 20.5629 20.5148 17.0332 25.005 17.0332C29.4856 17.0332 33.1291 20.5629 33.1291 24.8948C33.1291 29.2362 29.4856 32.7659 25.005 32.7659Z"
      fill={borderColor}
    />
    <path
      d="M24.7482 18.6658C21.2189 18.8074 18.4696 21.7142 18.6028 25.1496C18.7455 28.5849 21.7326 31.2558 25.2524 31.1142C28.7817 30.9726 31.5215 28.0658 31.3883 24.6305C31.2551 21.1952 28.2775 18.5243 24.7482 18.6658ZM25.1858 29.2267C22.7029 29.3305 20.61 27.4618 20.5149 25.0741C20.4198 22.6863 22.3509 20.6572 24.8338 20.5534C27.3072 20.4496 29.4001 22.3277 29.4952 24.706C29.5903 27.1032 27.6497 29.1323 25.1858 29.2267Z"
      fill={borderColor}
    />
    <path
      d="M29.4952 24.8946C29.4952 27.2918 27.4784 29.236 25.005 29.236C22.5221 29.236 20.5054 27.2918 20.5054 24.8946C20.5054 22.5069 22.5221 20.5533 25.005 20.5533C27.4784 20.5533 29.4952 22.5069 29.4952 24.8946Z"
      fill={color}
    />
    <path
      d="M8.98791 7.66764L7.64258 9.00232L41.0203 42.1158L42.3656 40.7811L8.98791 7.66764Z"
      fill={color}
    />
    <path
      d="M8.98469 7.67088L42.3659 40.7879L41.0245 42.1186L7.64336 9.0016L8.98469 7.67088ZM8.98469 5L7.64336 6.33072L6.29251 7.67088L4.95117 9.0016L6.29251 10.3323L39.6737 43.4493L41.015 44.78L42.3564 43.4493L43.6977 42.1186L45.039 40.7879L43.6977 39.4572L10.3355 6.33072L8.98469 5Z"
      fill={borderColor}
    />
  </svg>
);

export default IconEyeHide;
