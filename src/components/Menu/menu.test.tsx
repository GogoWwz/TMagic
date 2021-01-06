import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

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
      <MenuItem index={0}>item1</MenuItem>
      <MenuItem index={1}>item2</MenuItem>
      <MenuItem disabled index={2}>disabled</MenuItem>
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
    menuElement = wrapper.getByRole("list")
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