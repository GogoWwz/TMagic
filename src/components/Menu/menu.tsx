import React, { useState, createContext, cloneElement } from 'react'
import classNames from 'classnames'

import { MenuItemProps } from './menuItem'

export type MenuKey = string
type MenuMode = "horizontal" | "vertical"
type MenuSelectedCallback = (selectIndex: MenuKey) => void

export interface MenuProps {
  defaultSeletedKey?: MenuKey
  className?: string,
  mode?: MenuMode,
  onSelect?: MenuSelectedCallback
}

interface IMenuContext {
  activeKey?: MenuKey | number,
  mode?: MenuMode,
  onSelect?: MenuSelectedCallback
}

const MenuContext = createContext<IMenuContext>({
  activeKey: 0,
  mode: "horizontal"
})

const Menu: React.FC<MenuProps> = props => {
  const { defaultSeletedKey, className, mode, children, onSelect } = props
  const [activeKey, setActiveKey] = useState(defaultSeletedKey)

  const classes = classNames('tm-menu', className, {
    [`tm-menu__${ mode }`]: mode
  })

  const handleClick = (key: MenuKey) => {
    setActiveKey(key)
    if(onSelect) {
      onSelect(key)
    }
  }

  const passedContext: IMenuContext = {
    activeKey,
    onSelect: handleClick,
    mode
  }

  const MenuItems = React.Children.map(children, (child, index) => {
    // 因为child是ReactNode类型，而displayName是存在函数式组件实例上的属性，所以需要进行类型断言
    const ChildElement = child as React.FunctionComponentElement<MenuItemProps> & React.ReactNode
    const { displayName } = ChildElement.type
    if(displayName === 'MenuItem' || displayName === 'SubMenu') {
      return cloneElement(ChildElement, {
        index
      })
    } else {
      console.error("Warning: Menu has a child whitch is not a MenuItem component！")
    }
  })

  return (
    <ul className={classes} role="menu">
      <MenuContext.Provider value={passedContext}>
        { MenuItems }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: "horizontal"
}

export {
  MenuContext
}
export default Menu