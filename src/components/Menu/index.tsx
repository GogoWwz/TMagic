import { FC } from 'react'

import Menu, { MenuProps } from './menu'
import MenuItem, { MenuItemProps } from './menuItem'

type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
}

const MenuComponent = Menu as IMenuComponent
MenuComponent.Item = MenuItem

export default MenuComponent