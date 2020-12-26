import React from 'react'
import classnames from 'classnames'

// 按钮类型
export enum ButtonType {
  Default = "default",
  Primary = 'primary',
  Success = "success",
  Warning = 'warning',
  Danger = "danger",
  Info = "info",
  Link = 'link'
}

// 按钮HTML类型
export enum ButtonHTMLType {
  Submit = 'submit',
  Reset = 'reset',
  Button = 'button'
}

// 按钮尺寸
export enum ButtonSize {
  Large = 'large',
  Normal = 'normal',
  Small = 'small'
}

// 按钮大小和类型字符串字面量
type ButtonTypeLimit = "default" | "primary" | "success" | "warning" | "danger" | "link"
type ButtonSizeLimit = "large" | "normal" | "small"

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
  htmlType?: ButtonHTMLType
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
    'disabled': type === ButtonType.Link && disabled
  })

  if (type === ButtonType.Link) {
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
  type: ButtonType.Default
}

export default Button