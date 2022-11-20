import type { IconName } from '@shared/Icon/models';
import type { ReactNode } from 'react';


export interface BlockContainerProps {
    className? : 'string';
    title?: 'string';
    children: ReactNode;
    iconName?: IconName;
}