import React, { useState } from 'react'
import classnames from 'classnames'

import {
  Num
} from './rules'

// const ChildrenLegalName: Array<string> = [
//   "Input"
// ]

interface IValidator {
  rule?: RegExp,
  message?: string
}

export interface ValidatorProps {
  validates: {
    num?: IValidator,
    custom?: IValidator
  },
  classNames?: string
}

// interface FunctionComponentElement {}

const Validator: React.FC<ValidatorProps> = props => {
  const { validates, classNames, children } = props
  const [isValid, setIsValid] = useState(true)
  const [mes, setMes] = useState("")

  const classes = classnames("tm-vali", classNames)

  // 校验器进行校验
  const validate = (val: string) => {
    Object.keys(validates).forEach(item => {
      if(validates.hasOwnProperty(item)) {
        const { message } = (validates as any)[item]
        if(item === 'num') {
          setIsValid(Num.test(val))
          setMes(message || "请输入纯数字")
        }
      }
    })
  }
  // const ChildrenElement = children as React.FunctionComponentElement<FunctionComponentElement>
  // const { displayName = "" } = ChildrenElement.type
  // if(!ChildrenLegalName.includes(displayName)) {
  //   console.error("Tmagic Warning: Validator component must accept legal verifiable children！")
  // }
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e.target.value)
  }
  return (
    <div className={classes}>
      { children }
      <input type="text" onChange={changeInput} />
      {
        !isValid && <div className="tm-vali__err">{ mes }</div>
      }
    </div>
  )
}

Validator.defaultProps = {}

export default Validator