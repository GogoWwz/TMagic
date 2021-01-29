import React from 'react'
import classnames from 'classnames'
import './index.scss'

type RoleTypes = "row"
export interface DemoBlockProps {
  role?: RoleTypes
}

const DemoBlock: React.FC<DemoBlockProps> = props => {
  const { role } = props
  const classes = classnames("tm-demoblock", {
    [`tm-demo-${role}`]: role
  })
  return (
    <div className={classes}>
      { props.children }
    </div>
  )
}

export default DemoBlock