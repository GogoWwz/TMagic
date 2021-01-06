import React, { useState, createContext } from 'react'
import classNames from 'classnames'

// import { MenuItemProps } from './menuItem'

type MenuMode = "horizontal" | "vertical"
type MenuKey = number
type MenuSelectedCallback = (selectIndex: number) => void


interface IMenuContext {
  currentIndex?: MenuKey,
  onSelect?: MenuSelectedCallback
}

export interface MenuProps {
  defaultSeletedKey?: MenuKey
  className?: string,
  mode?: MenuMode,
  onSelect?: MenuSelectedCallback
}

const MenuContext = createContext<IMenuContext>({ currentIndex: 0 })

const Menu: React.FC<MenuProps> = props => {
  const { defaultSeletedKey, className, mode, children, onSelect } = props
  const [currentIndex, setActiveIndex] = useState(defaultSeletedKey)

  const classes = classNames('tm-menu', className, {
    [`tm-menu__${ mode }`]: mode
  })

  const handleClick = (key: MenuKey) => {
    setActiveIndex(key)
    if(onSelect) {
      onSelect(key)
    }
  }
  
  const passedContext: IMenuContext = {
    currentIndex: currentIndex || 0,
    onSelect: handleClick
  }

  // const MenuItems = React.Children.map(children, (child, index) => {
  //   // 因为child是ReactNode类型，而displayName是存在函数式组件实例上的属性，所以需要进行类型断言
  //   const ChildElement = child as React.FunctionComponentElement<MenuItemProps>
  //   const { displayName } = ChildElement.type
  //   if(displayName === 'MenuItem') {
  //     return cloneElement(ChildElement, { index })
  //   } else {
  //     console.error("Warning: Menu has a child whitch is not a MenuItem component！")
  //   }
  // })

  return (
    <ul className={classes}>
      <MenuContext.Provider value={passedContext}>
        {/* { MenuItems } */}
        { children }
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