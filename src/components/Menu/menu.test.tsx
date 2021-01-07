import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const TestHorProps: MenuProps = {
  mode: "horizontal",
  onSelect: jest.fn(),
  className: "test"
}

// const TestVerProps: MenuProps = {
//   mode: "vertical",
//   onSelect: jest.fn(),
//   className: "test"
// }

const TestMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>item1</MenuItem>
      <MenuItem>item2</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <SubMenu>
        <MenuItem>submenu1</MenuItem>
        <MenuItem>submenu2</MenuItem>
      </SubMenu>
    </Menu>
  )
}

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disableElement: HTMLElement

describe("Menu Test", () => {
  beforeEach(() => {
    wrapper = render(TestMenu(TestHorProps))
    menuElement = wrapper.getByRole("menu")
    activeElement = wrapper.getByText("item1")
    disableElement = wrapper.getByText('disabled')
  })
  it("是否正常挂载menu组件", () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement.tagName).toEqual("UL")
    expect(menuElement).toHaveClass("tm-menu")
    expect(activeElement).toHaveClass("tm-menuitem__active")
    expect(disableElement).toHaveClass("tm-menuitem__disabled")
  })
  it("是否正常加载prop属性", () => {
    expect(menuElement).toHaveClass("tm-menu__horizontal")
  })
  it("是否正常执行prop事件", () => {
    const clickElement = wrapper.getByText("item2")
    fireEvent.click(clickElement)
    expect(TestHorProps.onSelect).toHaveBeenCalled()
  })
})