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

// 按钮尺寸
export enum ButtonSize {
    Large = 'large',
    Normal = 'normal',
    Small = 'small'
}

// Button基础属性
export interface BaseButtonProps {
    type?: string,
    size?: ButtonSize,
    className?: string,
    disabled?: boolean,
    href?: string
}


// button属性
type NativeButtonProps = BaseButtonProps
// a链接属性
type AnchorButtonProps = BaseButtonProps

// export type ButtonTypes = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<BaseButtonProps> = props => {
    const {
        className,
        disabled,
        size,
        type,
        children,
        href,
        ...restProps
    } = props

    const classes = classnames('tm-btn', {
        [`tm-btn__${ type }`]: type,
        [`tm-btn__${ size }`]: size,
        'disabled': type === ButtonType.Link && disabled
    })

    if(type === ButtonType.Link) {
        return (
            <a href={href} className={classes}>
                { children }
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
            >
                { children }
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    type: ButtonType.Default,
    size: ButtonSize.Normal
}

export default Button