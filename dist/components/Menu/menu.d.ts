import React from 'react';
declare type MenuMode = "horizontal" | "vertical";
declare type MenuKey = number;
declare type MenuSelectedCallback = (selectIndex: number) => void;
interface IMenuContext {
    currentIndex?: MenuKey;
    onSelect?: MenuSelectedCallback;
}
export interface MenuProps {
    defaultSeletedKey?: MenuKey;
    className?: string;
    mode?: MenuMode;
    onSelect?: MenuSelectedCallback;
}
declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export { MenuContext };
export default Menu;
