import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

export interface IconProps extends Omit<FontAwesomeIconProps, 'size'> {
  size?: number | string
}

const Icon: React.FC<IconProps> = props => {
  const { size = 16, ...resProps } = props
  return (
    <FontAwesomeIcon
      {...resProps}
      style={{ fontSize: size }}
    />
  )
}

export default Icon