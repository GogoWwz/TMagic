import { FC } from 'react'

import Menu, { MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuItem'

// 原来的Menu组件为FC类型，并没有Item和SubMenu属性，所以需要增加这两个属性
export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

// 将MenuComponent组件断言为 IMenuComponent 类型
const MenuComponent = Menu as IMenuComponent
MenuComponent.Item = MenuItem
MenuComponent.SubMenu = SubMenu

export default MenuComponent