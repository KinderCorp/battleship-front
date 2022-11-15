import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';

import type { IconName, IconProps } from '@shared/Icon/models';

export const ICON_LIST: Record<IconName, ComponentType<IconProps>> = {
  People: dynamic(() => import('@shared/Icon/components/IconPeople')),
};
