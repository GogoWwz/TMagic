import React from 'react';
export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
