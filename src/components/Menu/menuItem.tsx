import React, { useContext } from 'react'
import classNames from 'classnames'

import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: number,
  disabled?: boolean,
  className?: string
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const { index, disabled, className, children } = props
  const { currentIndex, onSelect } = useContext(MenuContext)

  const classes = classNames("tm-menuitem", className, {
    "tm-menuitem__disabled": disabled,
    "tm-menuitem__active": currentIndex === index
  })

  const handleClick = () => {
    if(!disabled && onSelect) {
      onSelect(index || 0)
    }
  }

  return (
    <li className={classes} onClick={handleClick}>{ children }</li>
  )
}

export default MenuItem