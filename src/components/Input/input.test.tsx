import React from 'react'

import { fireEvent, render, RenderResult } from '@testing-library/react'

import Input, { InputProps } from './input'

const TestProps: InputProps = {
  defaultValue: "test",
  onChange: jest.fn()
}
let wrapper: RenderResult, inputBoxElement: HTMLElement, inputElement: Partial<HTMLInputElement>

describe("Input Test", () => {
  beforeEach(() => {
    wrapper = render(<Input {...TestProps} />)
    inputBoxElement = wrapper.getByRole("search")
    inputElement = wrapper.getByDisplayValue("test")
  })
  it("input组件是否正常加载", () => {
    expect(inputBoxElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(inputBoxElement).toHaveClass("tm-input")
    expect(inputElement).toHaveClass("tm-input__inner")
  })
  it("input组件是否正常加载prop属性", () => {
    expect(inputElement.value).toEqual("test")
  })
  it("input组件是否正常加载prop事件", () => {
    fireEvent.change(inputElement as HTMLElement, { target: { value: "changed" } })
    expect(inputElement.value).toEqual("changed")
  })
})