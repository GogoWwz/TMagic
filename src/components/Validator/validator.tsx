import React, { useMemo, useState } from 'react'
import classnames from 'classnames'

import _ from './rules'

const ChildrenLegalName: Array<string> = [
  "Input"
]

interface IValidator {
  rule?: ((value: string) => boolean) | RegExp,
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
  const [valid, setValid] = useState(true)
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
      const numValid = _.isNum(val)
      valueType = "number"
      setValid(numValid)
      if(!numValid) {
        setMes(message || "请输入纯数字")
        return
      }
    }

    if(valideRules.includes("min")) {
      const { message, value = 10 } = validates["min"] as IValidator
      let minValid = _.isAboveLen(val, value)
      if(valueType === 'number') {
        minValid = _.isAboveNum(val, value)
      }
      setValid(minValid)
      if(!minValid) {
        setMes(message || "请输入正确范围的值")
        return
      }
    }

    if(valideRules.includes("custom")) {
      const { rule, message } = validates["custom"] as IValidator
      if(typeof rule !== 'function') {
        console.error("warning: custom rule must be a function！")
        return
      }
      const customValid = rule(val);
      if(typeof customValid !== 'boolean') {
        console.error("warning: custom rule must return a boolean！")
      }
      setValid(customValid)
      if(!customValid) {
        setMes(message || "自定义校验规则失败")
      }
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
        !valid && <div className="tm-vali__err">{ mes }</div>
      }
    </div>
  )
}

Validator.defaultProps = {}

export default Validator