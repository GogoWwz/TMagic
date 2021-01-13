import React, { useMemo, useState } from 'react'
import classnames from 'classnames'

import _ from './rules'

const ChildrenLegalName: Array<string> = [
  "Input"
]

interface IValidator {
  rule?: RegExp,
  message?: string,
  value?: number
}

export interface ValidatorProps {
  validates: {
    num?: IValidator,
    min?: IValidator,
    custom?: IValidator
  },
  classNames?: string
}

interface FunctionComponentElement {}

const Validator: React.FC<ValidatorProps> = props => {
  const { validates, classNames, children } = props
  const [isValid, setIsValid] = useState(true)
  const [mes, setMes] = useState("")

  const classes = classnames("tm-vali", classNames)

  // 校验器进行校验
  const valideRules = useMemo(() => {
    return Object.keys(validates)
  }, [validates])

  const validate = (val: string) => {
    let valueType = "string"
    if(valideRules.includes("num")) {
      const { message } = validates["num"] as IValidator
      const flag = _.isNum(val)
      setIsValid(flag)
      valueType = "number"
      if(!flag) {
        setMes(message || "请输入纯数字")
        return
      }
    }
    if(valideRules.includes("min")) {
      const { message, value } = validates["min"] as IValidator
      if(valueType === 'number') {
        setIsValid(_.isAboveNum(val, value || 10))
      } else {
        setIsValid(_.isAboveLen(val, value || 10))
      }
      setMes(message || "请输入正确范围的值")
    }
  }
  // 渲染子组件
  const ChildrenElement = children as React.FunctionComponentElement<FunctionComponentElement>
  const { displayName = "" } = ChildrenElement.type
  if(!ChildrenLegalName.includes(displayName)) {
    console.error("Tmagic Warning: Validator component must accept legal verifiable children！")
  }
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