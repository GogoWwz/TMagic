import React from 'react'
import classnames from 'classnames'

const ChildrenLegalName: Array<string> = [
  "Input"
]

export interface ValidatorProps {
  classNames?: string,
  message?: string
}

interface FunctionComponentElement {}

const Validator: React.FC<ValidatorProps> = props => {
  const { classNames, children, message } = props

  const ChildrenElement = children as React.FunctionComponentElement<FunctionComponentElement>

  const { displayName = "" } = ChildrenElement.type

  if(!ChildrenLegalName.includes(displayName)) {
    console.error("Tmagic Warning: Validator component must accept legal verifiable children！")
  }

  const classes = classnames("tm-vali", classNames)

  return (
    <div className={classes}>
      { children }
      <div className="tm-vali__err">{ message }</div>
    </div>
  )
}

Validator.defaultProps = {
  message: "请输入合法的值"
}

export default Validator