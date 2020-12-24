import React from 'react'
import classNames from 'classnames'
import MenuItem from './menuItem'

type MenuMode = "horizontal" | "vertical"

export interface MenuProps {
  defaultSeletedKey?: number
  className?: string,
  mode?: MenuMode,
  onSelect?: (selectIndex: number) => void
}

const Menu: React.FC<MenuProps> = props => {
  const { className, mode, children } = props
  const classes = classNames('tm-menu', className, {
    [`tm-menu__${ mode }`]: mode
  })
  return (
    <ul className={classes}>
      { children }
    </ul>
  )
}

export {
  MenuItem
}
export default Menu