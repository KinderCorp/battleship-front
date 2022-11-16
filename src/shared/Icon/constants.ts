import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';

import type { IconName, IconSvgProps } from '@shared/Icon/models';

export const ICON_LIST: Record<IconName, ComponentType<IconSvgProps>> = {
  Add: dynamic(() => import('@shared/Icon/components/IconAdd')),
  ArrowLeft: dynamic(() => import('@shared/Icon/components/IconArrowLeft')),
  People: dynamic(() => import('@shared/Icon/components/IconPeople')),
};
