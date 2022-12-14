import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';

import type { IconName, IconSvgProps } from '@shared/Icon/models';

export const ICON_LIST: Record<IconName, ComponentType<IconSvgProps>> = {
  Add: dynamic(() => import('@shared/Icon/components/IconAdd'), { suspense: false }),
  ArrowLeft: dynamic(() => import('@shared/Icon/components/IconArrowLeft'), { suspense: false }),
  Boat: dynamic(() => import('@shared/Icon/components/IconBoat'), { suspense: false }),
  Check: dynamic(() => import('@shared/Icon/components/IconCheck'), { suspense: false }),
  Close: dynamic(() => import('@shared/Icon/components/IconClose'), { suspense: false }),
  Copy: dynamic(() => import('@shared/Icon/components/IconCopy'), { suspense: false }),
  Dice: dynamic(() => import('@shared/Icon/components/IconDice'), { suspense: false }),
  Eye: dynamic(() => import('@shared/Icon/components/IconEye'), { suspense: false }),
  EyeHide: dynamic(() => import('@shared/Icon/components/IconEyeHide'), { suspense: false }),
  GearWheel: dynamic(() => import('@shared/Icon/components/IconGearWheel'), { suspense: false }),
  Infinity: dynamic(() => import('@shared/Icon/components/IconInfinity'), { suspense: false }),
  Loader: dynamic(() => import('@shared/Icon/components/IconLoader'), { suspense: false }),
  Lock: dynamic(() => import('@shared/Icon/components/IconLock'), { suspense: false }),
  Logout: dynamic(() => import('@shared/Icon/components/IconLogout'), { suspense: false }),
  Pen: dynamic(() => import('@shared/Icon/components/IconPen'), { suspense: false }),
  People: dynamic(() => import('@shared/Icon/components/IconPeople'), { suspense: false }),
  Reload: dynamic(() => import('@shared/Icon/components/IconReload'), { suspense: false }),
  Remove: dynamic(() => import('@shared/Icon/components/IconRemove'), { suspense: false }),
  Share: dynamic(() => import('@shared/Icon/components/IconShare'), { suspense: false }),
  Target: dynamic(() => import('@shared/Icon/components/IconTarget'), { suspense: false }),
  Trophy: dynamic(() => import('@shared/Icon/components/IconTrophy'), { suspense: false }),
};
