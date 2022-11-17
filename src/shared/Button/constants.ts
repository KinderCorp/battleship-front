import type { ButtonIconStyle } from '@shared/Button/models';
import { COLORS } from '@core/constants';
import type { IconSvgProps } from '@shared/Icon/models';

export const BUTTON_ICON_STYLES: Record<ButtonIconStyle, Record<keyof IconSvgProps, string>> = {
  disabled: {
    borderColor: COLORS.BLACK,
    color: COLORS.WHITE,
  },
  primary: {
    borderColor: COLORS.BROWN,
    color: COLORS.WHITE,
  },
  secondary: {
    borderColor: COLORS.PURPLE_DARK,
    color: COLORS.WHITE,
  },
};
