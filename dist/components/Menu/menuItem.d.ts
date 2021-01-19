import React from 'react';
import { MenuKey } from './menu';
export interface MenuItemProps {
    tag: MenuKey;
    index?: number;
    disabled?: boolean;
    className?: string;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
