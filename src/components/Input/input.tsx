import React from 'react'
import classnames from 'classnames'

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, "size">

export interface InputProps extends NativeInputProps {
  className?: string,
  size?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input: React.FC<InputProps> = props => {
  const {
    className,
    size,
    onChange,
    ...restProps
  } = props
  const classes = classnames("tm-input", className)

  // 兼容value和defaultValue共存的情况
  if ("value" in props) {
    delete restProps.defaultValue
  }

  return (
    <div role="search" className={classes}>
      <input className="tm-input__inner" type="text" onChange={onChange} {...restProps}/>
    </div>
  )
}

Input.displayName = "Input"

export default Input