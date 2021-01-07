import React, { cloneElement, useContext } from 'react'
import classnames from 'classnames'

import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: number,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, className, children } = props
  const { currentIndex } = useContext(MenuContext)

  const classes = classnames("tm-menuitem tm-submenu", className, {
    "tm-menuitem__active": index === currentIndex
  })

  const MenuItems = React.Children.map(children, (child, idx) => {
    const ChildElement = child as React.FunctionComponentElement<MenuItemProps>
    const { displayName } = ChildElement.type
    
    if(displayName === 'MenuItem') {
      return cloneElement(ChildElement, {
        index
      })
    } else {
      console.error("Warning: Menu has a child whitch is not a MenuItem component！")
    }
  })

  return (
    <li className={classes}>
      <div>SubMenu</div>
      <ul className="tm-sublist">
        { MenuItems }
      </ul>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu