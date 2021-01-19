import React from 'react';
export declare type MenuKey = string;
declare type MenuMode = "horizontal" | "vertical";
declare type MenuSelectedCallback = (selectIndex: MenuKey) => void;
export interface MenuProps {
    defaultSeletedKey?: MenuKey;
    className?: string;
    mode?: MenuMode;
    onSelect?: MenuSelectedCallback;
}
interface IMenuContext {
    activeKey?: MenuKey | number;
    mode?: MenuMode;
    onSelect?: MenuSelectedCallback;
}
declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export { MenuContext };
export default Menu;
