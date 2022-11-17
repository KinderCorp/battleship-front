import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon reload component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconReload = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg icon-reload"
    data-testid="icon-reload"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.7712 13.2292C33.7503 10.2084 29.6045 8.33337 25.0003 8.33337C15.792 8.33337 8.35449 15.7917 8.35449 25C8.35449 34.2084 15.792 41.6667 25.0003 41.6667C32.7712 41.6667 39.2503 36.3542 41.1045 29.1667H36.7712C35.0628 34.0209 30.4378 37.5 25.0003 37.5C18.1045 37.5 12.5003 31.8959 12.5003 25C12.5003 18.1042 18.1045 12.5 25.0003 12.5C28.4587 12.5 31.542 13.9375 33.792 16.2084L27.0837 22.9167H41.667V8.33337L36.7712 13.2292Z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M42.667 5.91907V23.9166H24.6694L32.3517 16.2343C30.3625 14.5365 27.8148 13.4999 25.0003 13.4999C18.6568 13.4999 13.5003 18.6564 13.5003 24.9999C13.5003 31.3435 18.6568 36.4999 25.0003 36.4999C30.0003 36.4999 34.256 33.3011 35.8279 28.8346L36.063 28.1666H42.3952L42.0728 29.4164C40.1084 37.0313 33.2418 42.6666 25.0003 42.6666C15.2381 42.6666 7.35449 34.7589 7.35449 24.9999C7.35449 15.241 15.2381 7.33328 25.0003 7.33328C29.5232 7.33328 33.6288 9.0408 36.7515 11.8345L42.667 5.91907ZM25.0003 9.33328C16.3459 9.33328 9.35449 16.3423 9.35449 24.9999C9.35449 33.6576 16.3459 40.6666 25.0003 40.6666C31.8428 40.6666 37.6237 36.283 39.7577 30.1666H37.4591C35.4384 35.0569 30.6226 38.4999 25.0003 38.4999C17.5522 38.4999 11.5003 32.4481 11.5003 24.9999C11.5003 17.5518 17.5522 11.4999 25.0003 11.4999C28.7452 11.4999 32.0789 13.0586 34.5023 15.5044L35.203 16.2115L29.4979 21.9166H40.667V10.7475L36.7712 14.6433L36.064 13.9362C33.2209 11.0931 29.3257 9.33328 25.0003 9.33328Z"
      fill={borderColor}
      fillRule="evenodd"
    />
  </svg>
);

export default IconReload;
