import React from 'react'
import classNames from 'classnames'
import Menu from './menu'

export interface MenuItemProps {
  key?: number,
  disabled?: boolean,
  className?: string
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const { key, disabled, className } = props
  const classes = classNames("tm-menuitem", className, {
    "tm-menuitem__disabled": disabled
  })
  return (
    <li className={classes}>列表</li>
  )
}

export default MenuItem