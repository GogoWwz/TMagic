import React from 'react'
import classnames from 'classnames'

// 按钮大小和类型字符串字面量
type ButtonTypeLimit = "default" | "primary" | "success" | "warning" | "danger" | "link"
type ButtonSizeLimit = "large" | "normal" | "small"
type ButtonHtmlTypeLimit = "button" | "submit" | "reset"

// Button基础属性
export interface BaseButtonProps {
  type?: ButtonTypeLimit,
  size?: ButtonSizeLimit,
  className?: string,
  disabled?: boolean,
  href?: string
}


// button属性
// 利用Omit帮助类型去除原生button中的 type 属性，用自定义的htmlType属性代替
export type NativeButtonProps = {
  htmlType?: ButtonHtmlTypeLimit
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>

// a链接属性
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

// 利用Partial使属性非必传
export type ButtonTypes = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonTypes> = props => {
  const {
    className,
    disabled,
    size,
    type,
    children,
    href,
    ...restProps
  } = props

  const classes = classnames('tm-btn', className, {
    [`tm-btn__${type}`]: type,
    [`tm-btn__${size}`]: size,
    'disabled': type === 'link' && disabled
  })

  if (type === "link") {
    return (
      <a href={href} className={classes} {...restProps}>
        { children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        { children }
      </button>
    )
  }
}

Button.defaultProps = {
  type: "default"
}

export default Button