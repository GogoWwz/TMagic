import React, { cloneElement, useMemo, useState } from 'react'
import classnames from 'classnames'

import _ from './rules'

import { InputProps } from '../Input/input'

const ChildrenLegalName: Array<string> = [
  "Input"
]

interface IValidator {
  rule?: ((value: string) => boolean) | RegExp,
  message?: string,
  value?: number
}

type ValidatorExecutor = IValidator | boolean

export interface ValidatorProps {
  validates: {
    required?: ValidatorExecutor,
    num?: ValidatorExecutor,
    min?: ValidatorExecutor,
    custom?: IValidator
  },
  classNames?: string
}

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

    if(valideRules.includes("required")) {
      const ruleValidator =  validates["required"] as ValidatorExecutor
      // 如果为true 或者为 validtor构造器，则进入校验，否则跳过
      if(ruleValidator) {
        const requiredValid = _.isEmpty(val)
        setValid(requiredValid)
        let message = "不能为空"
        if(typeof ruleValidator === 'object') {
          message = ruleValidator.message || message;
        }
        if(!requiredValid) {
          setMes(message)
          return
        }
      }
    }

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
        console.error("Tmagic Warning: custom rule must be a function！")
        return
      }
      const customValid = rule(val);
      if(typeof customValid !== 'boolean') {
        console.error("Tmagic Warning: custom rule must return a boolean！")
      }
      setValid(customValid)
      if(!customValid) {
        setMes(message || "自定义校验规则失败")
      }
    }
  }
  // 渲染子组件
  const rendeFormComponent = () => {
    const ChildElement = children as React.FunctionComponentElement<InputProps>
    const { displayName = "" } = ChildElement.type
    if(ChildrenLegalName.includes(displayName)) {
      return cloneElement(ChildElement, {
        defaultValue: "defaultValue",
        onChange: changeInput,
        className: valid ? "" : "tm-input__error"
      })
    } else {
      console.error("Tmagic Warning: Validator component must accept legal verifiable children！")
    }
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e.target.value)
  }
  return (
    <div className={classes}>
      { rendeFormComponent() }
      {
        !valid && <div className="tm-vali__err">{ mes }</div>
      }
    </div>
  )
}

Validator.defaultProps = {}

export default Validator