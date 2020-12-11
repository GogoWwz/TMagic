import React from 'react'

// 按钮类型
export enum ButtonType {
    Primary = 'primary',
    Success = "success",
    Warning = 'warning',
    Danger = "danger",
    Info = "info"
}

// 按钮尺寸
export enum ButtonSize {
    Large = 'large',
    Normal = 'normal',
    Small = 'small'
}


const Button: React.FC = props => {
    return (
        <button>按钮组件</button>
    )
}