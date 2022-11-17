import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';

import type { IconName, IconSvgProps } from '@shared/Icon/models';

export const ICON_LIST: Record<IconName, ComponentType<IconSvgProps>> = {
  Add: dynamic(() => import('@shared/Icon/components/IconAdd')),
  ArrowLeft: dynamic(() => import('@shared/Icon/components/IconArrowLeft')),
  Boat: dynamic(() => import('@shared/Icon/components/IconBoat')),
  Check: dynamic(() => import('@shared/Icon/components/IconCheck')),
  Close: dynamic(() => import('@shared/Icon/components/IconClose')),
  Copy: dynamic(() => import('@shared/Icon/components/IconCopy')),
  Dice: dynamic(() => import('@shared/Icon/components/IconDice')),
  Eye: dynamic(() => import('@shared/Icon/components/IconEye')),
  EyeHide: dynamic(() => import('@shared/Icon/components/IconEyeHide')),
  GearWheel: dynamic(() => import('@shared/Icon/components/IconGearWheel')),
  Infinity: dynamic(() => import('@shared/Icon/components/IconInfinity')),
  Lock: dynamic(() => import('@shared/Icon/components/IconLock')),
  Logout: dynamic(() => import('@shared/Icon/components/IconLogout')),
  Pen: dynamic(() => import('@shared/Icon/components/IconPen')),
  People: dynamic(() => import('@shared/Icon/components/IconPeople')),
};
