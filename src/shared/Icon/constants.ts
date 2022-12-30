import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import type { DynamicOptions } from 'next/dynamic';

import type { IconName, IconSvgProps } from '@shared/Icon/models';

const OPTIONS: DynamicOptions<IconSvgProps> = { ssr: false };

export const ICON_LIST: Record<IconName, ComponentType<IconSvgProps>> = {
  Add: dynamic(() => import('@shared/Icon/components/IconAdd'), OPTIONS),
  ArrowLeft: dynamic(() => import('@shared/Icon/components/IconArrowLeft'), OPTIONS),
  Boat: dynamic(() => import('@shared/Icon/components/IconBoat'), OPTIONS),
  Check: dynamic(() => import('@shared/Icon/components/IconCheck'), OPTIONS),
  Close: dynamic(() => import('@shared/Icon/components/IconClose'), OPTIONS),
  Copy: dynamic(() => import('@shared/Icon/components/IconCopy'), OPTIONS),
  Dice: dynamic(() => import('@shared/Icon/components/IconDice'), OPTIONS),
  Eye: dynamic(() => import('@shared/Icon/components/IconEye'), OPTIONS),
  EyeHide: dynamic(() => import('@shared/Icon/components/IconEyeHide'), OPTIONS),
  GearWheel: dynamic(() => import('@shared/Icon/components/IconGearWheel'), OPTIONS),
  Infinity: dynamic(() => import('@shared/Icon/components/IconInfinity'), OPTIONS),
  Loader: dynamic(() => import('@shared/Icon/components/IconLoader'), OPTIONS),
  Lock: dynamic(() => import('@shared/Icon/components/IconLock'), OPTIONS),
  Logout: dynamic(() => import('@shared/Icon/components/IconLogout'), OPTIONS),
  Pen: dynamic(() => import('@shared/Icon/components/IconPen'), OPTIONS),
  People: dynamic(() => import('@shared/Icon/components/IconPeople'), OPTIONS),
  Reload: dynamic(() => import('@shared/Icon/components/IconReload'), OPTIONS),
  Remove: dynamic(() => import('@shared/Icon/components/IconRemove'), OPTIONS),
  Share: dynamic(() => import('@shared/Icon/components/IconShare'), OPTIONS),
  Target: dynamic(() => import('@shared/Icon/components/IconTarget'), OPTIONS),
  Trophy: dynamic(() => import('@shared/Icon/components/IconTrophy'), OPTIONS),
};
