import React, { useContext } from 'react'
import classNames from 'classnames'

import { MenuContext, MenuKey } from './menu'

export interface MenuItemProps {
  tag: MenuKey
  index?: number,
  disabled?: boolean,
  className?: string
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const { disabled, className, children, tag } = props
  const { activeKey, onSelect } = useContext(MenuContext)
  const classes = classNames("tm-menuitem", className, {
    "tm-menuitem__disabled": disabled,
    "tm-menuitem__active": activeKey === tag
  })

  const handleClick = () => {
    if(!disabled && onSelect) {
      onSelect(tag)
    }
  }

  return (
    <li className={classes} onClick={handleClick}>{ children }</li>
  )
}

MenuItem.displayName = "MenuItem"

export default MenuItem