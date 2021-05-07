import React from 'react'
import './index.scss'

const H3: React.FC = props => {
  return (
    <h3>
      { props.children }
    </h3>
  )
}

export default H3