import React, { cloneElement, useContext, useState } from 'react'
import classnames from 'classnames'

import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: number,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, className, children } = props
  const [open, setOpen] = useState(false)
  const { mode } = useContext(MenuContext)

  const classes = classnames("tm-submenu", className, {
    "tm-submenu__active": false
  })
  const subMenuItemClasses = classnames("tm-sublist", {
    "tm-sublist__open": open
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!open)
  }

  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault()
    setOpen(toggle)
  }

  const hoverEvents = mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
  } : {}

  const clickEvents = mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const renderSubMenuItem = () => {
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
      <ul className={subMenuItemClasses}>
        { MenuItems }
      </ul>
    )
  }

  return (
    <li className={classes} {...hoverEvents}>
      <div { ...clickEvents }>SubMenu</div>
      { renderSubMenuItem() }
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu