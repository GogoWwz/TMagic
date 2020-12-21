import React from 'react'
import './index.scss'

export interface IconProps {
  name: string,
  size?: number | string,
  color?: string,
  onClick?: React.MouseEvent
}

const Icon: React.FC<IconProps> = props => {
  const { name, size, color } = props
  return (
    <div >
      <svg className="svg-class" width={size} height={size}>
        <use xlinkHref={"#icon-" + name} fill={color} />
      </svg>
    </div>
  )
}

export default Icon