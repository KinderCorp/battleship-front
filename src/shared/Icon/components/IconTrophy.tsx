import type { IconSvgProps } from '@shared/Icon/models';

/**
 * Icon trophy component.
 *
 * @param {IconSvgProps} props Props
 * @return {JSX.Element}
 */
const IconTrophy = ({ borderColor, color }: IconSvgProps): JSX.Element => (
  <svg
    className="icon-svg icon-trophy"
    data-testid="icon-trophy"
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4619 42.0187C16.4619 40.7227 16.4169 39.4717 16.4709 38.2297C16.5339 36.7447 17.6949 35.4847 19.1889 35.2777C19.6299 35.2147 19.7829 35.0437 19.8909 34.6567C20.3139 33.1177 20.7639 31.5877 21.2139 29.9948C20.4849 29.8508 19.8099 29.7428 19.1529 29.5718C13.9779 28.2308 10.81 24.8018 9.09997 19.8698C8.40697 17.8808 8.05598 15.8198 7.92098 13.7319C7.75898 11.3199 9.35197 9.63689 11.773 9.60989C12.7269 9.60089 13.6809 9.60989 14.7069 9.60989C14.7069 9.0249 14.7069 8.4849 14.7069 7.8999C21.5829 7.8999 28.3868 7.8999 35.2538 7.8999C35.2538 8.4219 35.2538 8.9709 35.2538 9.60989C36.3338 9.60989 37.3508 9.59189 38.3588 9.60989C40.6268 9.65489 42.1927 11.3199 42.0937 13.5879C42.0577 14.3889 41.9587 15.1809 41.8417 15.9728C41.3827 19.0508 40.4198 21.9398 38.5478 24.4688C36.2348 27.5828 33.1028 29.3018 29.2958 29.8868C29.1698 29.9048 29.0348 29.9318 28.8368 29.9678C28.8998 30.2018 28.9448 30.4178 28.9988 30.6248C29.3948 32.0107 29.7818 33.4057 30.2138 34.7827C30.2768 34.9717 30.5288 35.1967 30.7268 35.2327C32.4728 35.5477 33.5528 36.7987 33.5618 38.5807C33.5708 39.7147 33.5618 40.8487 33.5618 42.0187C27.8648 42.0187 22.1949 42.0187 16.4619 42.0187ZM14.9049 13.0569C13.8699 13.0569 12.8979 13.0749 11.9169 13.0479C11.431 13.0299 11.314 13.2099 11.35 13.6689C11.521 15.8738 11.9349 18.0248 12.8349 20.0588C13.8519 22.3628 15.3639 24.2258 17.6409 25.3958C17.8029 25.4768 17.9739 25.5308 18.2619 25.6568C15.9399 21.7148 15.3279 17.4578 14.9049 13.0569ZM35.1098 13.0929C34.7048 17.4668 34.0658 21.7238 31.7798 25.6298C33.7598 24.8828 35.5778 23.1818 36.7208 20.9948C38.0168 18.5378 38.5658 15.8918 38.6738 13.0929C37.4408 13.0929 36.3158 13.0929 35.1098 13.0929Z"
      fill={color}
    />
    <path
      d="M33.5707 42.9188H16.4618C15.9668 42.9188 15.5618 42.5138 15.5618 42.0188C15.5618 41.6228 15.5618 41.2268 15.5528 40.8398C15.5438 39.9758 15.5348 39.0758 15.5708 38.1938C15.6608 36.2768 17.1008 34.6838 19.0178 34.3958C19.3508 33.2168 19.6658 32.1098 19.9898 30.9848L20.0708 30.6968C19.6748 30.6248 19.2968 30.5438 18.9188 30.4448C13.7349 29.0949 10.1439 25.6389 8.23589 20.1669C7.56989 18.2409 7.1649 16.1529 7.0119 13.786C6.9219 12.382 7.3449 11.095 8.19989 10.177C9.06388 9.24998 10.3329 8.72799 11.7639 8.70999C12.4209 8.70099 13.0779 8.70999 13.7619 8.70999H13.8069V7.89999C13.8069 7.405 14.2119 7 14.7068 7H35.2537C35.7487 7 36.1537 7.405 36.1537 7.89999V8.70999H36.2527C36.9727 8.70999 37.6747 8.70099 38.3767 8.71899C39.7267 8.74599 40.9327 9.25898 41.7787 10.168C42.6247 11.068 43.0567 12.301 42.9937 13.642C42.9577 14.362 42.8767 15.1269 42.7327 16.1259C42.2017 19.6899 41.0677 22.6059 39.2767 25.0269C37.0087 28.0869 33.8767 29.9948 29.9617 30.7058L30.1237 31.2728C30.4207 32.3168 30.7177 33.3518 31.0327 34.3868C33.1387 34.8278 34.4437 36.4208 34.4707 38.5808C34.4797 39.3638 34.4797 40.1378 34.4707 40.9298V42.0278C34.4707 42.5228 34.0657 42.9188 33.5707 42.9188ZM17.3528 41.1188H32.6707V40.9208C32.6707 40.1378 32.6707 39.3638 32.6707 38.5898C32.6617 37.2668 31.8967 36.3668 30.5737 36.1238C30.0427 36.0248 29.5207 35.5658 29.3678 35.0528C29.0258 33.9638 28.7108 32.8568 28.3958 31.7588L28.1438 30.8768C28.0988 30.7328 28.0628 30.5798 28.0268 30.4268L27.9728 30.1928C27.9098 29.9498 27.9548 29.6888 28.0898 29.4818C28.2248 29.2749 28.4408 29.1309 28.6928 29.0859L29.1698 29.0049C32.8957 28.4379 35.7307 26.7819 37.8367 23.9379C39.4477 21.7599 40.4737 19.1139 40.9597 15.8469C41.0947 14.9199 41.1667 14.209 41.2027 13.552C41.2387 12.688 40.9867 11.95 40.4737 11.392C39.9607 10.843 39.2047 10.528 38.3497 10.51C37.6657 10.501 36.9727 10.51 36.2707 10.51H35.2627C34.7677 10.51 34.3627 10.105 34.3627 9.60998V8.79999H15.6068V9.60998C15.6068 10.105 15.2018 10.51 14.7068 10.51H13.7529C13.0779 10.51 12.4299 10.51 11.7819 10.51C10.8369 10.519 10.0539 10.834 9.52288 11.41C9.00088 11.977 8.75789 12.76 8.81189 13.678C8.95588 15.8739 9.32488 17.8089 9.93688 19.5819C11.6559 24.5229 14.7338 27.5019 19.3688 28.7079C19.7918 28.8159 20.2238 28.8969 20.6738 28.9869C20.9078 29.0319 21.1418 29.0769 21.3848 29.1219C21.6278 29.1759 21.8438 29.3199 21.9788 29.5358C22.1048 29.7518 22.1408 30.0128 22.0778 30.2468L21.7268 31.4798C21.3938 32.6318 21.0698 33.7568 20.7638 34.8908C20.5568 35.6468 20.0978 36.0518 19.3238 36.1688C18.2618 36.3218 17.4338 37.2218 17.3798 38.2748C17.3438 39.1028 17.3528 39.9398 17.3618 40.8218C17.3528 40.9208 17.3528 41.0198 17.3528 41.1188ZM18.2618 26.5569C18.1448 26.5569 18.0278 26.5389 17.9198 26.4939L17.6678 26.3949C17.4878 26.3229 17.3618 26.2689 17.2268 26.2059C14.8958 25.0089 13.1859 23.1189 12.0069 20.4279C11.1519 18.4929 10.6389 16.3059 10.4499 13.741C10.4229 13.408 10.4409 12.931 10.8009 12.544C11.2059 12.13 11.7639 12.139 11.9529 12.148C12.6279 12.175 13.3029 12.166 13.9959 12.166H14.9048C15.3728 12.166 15.7598 12.517 15.8048 12.985C16.1918 17.0439 16.7588 21.3369 19.0448 25.2159C19.2428 25.5489 19.2068 25.9719 18.9458 26.2599C18.7748 26.4489 18.5228 26.5569 18.2618 26.5569ZM12.2769 13.957C12.4839 16.1979 12.9339 18.0609 13.6539 19.6989C14.2838 21.1389 15.0848 22.3089 16.0748 23.2179C14.8598 20.1579 14.3918 16.9989 14.0858 13.957H14.0049C13.4199 13.966 12.8439 13.966 12.2769 13.957ZM31.7797 26.5299C31.5187 26.5299 31.2667 26.4129 31.0957 26.2059C30.8527 25.9179 30.8167 25.5039 31.0057 25.1709C33.2827 21.2829 33.8407 17.0259 34.2187 13.003C34.2637 12.544 34.6507 12.184 35.1187 12.184H38.6827C38.9257 12.184 39.1597 12.283 39.3307 12.463C39.5017 12.643 39.5917 12.877 39.5827 13.12C39.4567 16.3059 38.7817 19.0149 37.5307 21.4089C36.2797 23.8029 34.2997 25.6479 32.1127 26.4669C31.9957 26.5119 31.8877 26.5299 31.7797 26.5299ZM35.9287 13.993C35.6317 16.9089 35.1637 20.1129 33.9487 23.1999C34.7137 22.4799 35.3887 21.5889 35.9197 20.5809C36.9277 18.6639 37.5127 16.5039 37.7107 13.993H35.9287Z"
      fill={borderColor}
    />
  </svg>
);

export default IconTrophy;
