import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button, { ButtonSize, ButtonType } from './button'

const testProps = {
  onClick: jest.fn(),
  type: ButtonType.Primary,
  size: ButtonSize.Normal,
  className: "custom"
}

describe("Button Test", () => {
  it("是否正常渲染默认按钮", () => {
    const wrapper = render(<Button onClick={ testProps.onClick }>Default</Button>)
    const element = wrapper.getByText("Default")
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("tm-btn tm-btn__default")
    fireEvent.click(element)
    expect(testProps.onClick).toHaveBeenCalled()
  })

  it("是否正常加载不同props的按钮", () => {
    const wrapper = render(<Button {...testProps}>Demo</Button>)
    const element = wrapper.getByText("Demo")
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("tm-btn tm-btn__primary custom")
  })

  it("是否正常加载一个Link按钮", () => {
    const wrapper = render(<Button type={ButtonType.Link}>Link</Button>)
    const element = wrapper.getByText("Link")
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("A")
    expect(element).toHaveClass("tm-btn tm-btn__link")
  })
})