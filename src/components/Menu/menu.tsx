import React, { useState, createContext } from 'react'
import classNames from 'classnames'

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

  return (
    <ul className={classes}>
      <MenuContext.Provider value={passedContext}>
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