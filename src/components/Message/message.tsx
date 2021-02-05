import React, { useState, useEffect } from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import classnames from 'classnames'
import Icon from '../Icon'

export type MessageTypes = 'primary' | 'warning' | 'success' | 'danger'

export interface MessageProps {
  className?: string,
  content?: string,
  type?: MessageTypes
}

const MessageComponent: React.FC<MessageProps> = props => {
  const { className, type, children } = props
  const [visible, setVisible] = useState(true)

  const classes = classnames("tm-message", className, {
    [`tm-message__${type}`]: true,
    [`tm-message__${ visible ? 'in' : "out" }`]: true
  })

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [])

  return (
    createPortal((
      <div className={classes}>
        {
          type === 'primary' && <Icon icon="exclamation-circle" className="t-message__icon"></Icon>
        }
        {
          type === 'success' && <Icon icon="check-circle" className="t-message__icon"></Icon>
        }
        {
          type === 'warning' && <Icon icon="exclamation-triangle" className="t-message__icon"></Icon>
        }
        {
          type === 'danger' && <Icon icon="times-circle" className="t-message__icon"></Icon>
        }
        <span>
          { children || '这是消息弹框组件' }
        </span>
      </div>
    ), document.body)
  )
}

const createMessage:(type: MessageTypes, msg?: string) => void = (type, msg) => {
  let div = document.createElement("div")
  render(<MessageComponent type={type}>{ msg }</MessageComponent>, div)

  setTimeout(() => {
    unmountComponentAtNode(div)
  }, 2400)
}

const Message = {
  Info: (msg?: string) => {
    createMessage("primary", msg)
  },
  Success: (msg?: string) => {
    createMessage("success", msg)
  },
  Warning:(msg?: string) => {
    createMessage("warning", msg)
  },
  Danger: (msg?: string) => {
    createMessage("danger", msg)
  }
}


export default Message