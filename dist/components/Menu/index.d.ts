import { FC } from 'react';
import { MenuProps } from './menu';
import { MenuItemProps } from './menuItem';
declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
};
declare const MenuComponent: IMenuComponent;
export default MenuComponent;
