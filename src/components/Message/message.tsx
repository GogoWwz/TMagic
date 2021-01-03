import React, { useState } from 'react'
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
  const { className, type } = props
  const [visible, setVisible] = useState(true)

  const classes = classnames("tm-message", className, {
    [`tm-message__${type}`]: true,
    [`tm-message__${ visible ? 'in' : "out" }`]: true
  })

  setTimeout(() => {
    setVisible(false)
  }, 2000)

  return (
    createPortal((
      <div className={classes}>
        <Icon icon="exclamation-circle" className="t-message__icon"></Icon>
        <span>
          这是消息弹框组件
        </span>
      </div>
    ), document.body)
  )
}

const Message = {
  info: () => {
    let div = document.createElement("div")
    render(<MessageComponent type="primary"></MessageComponent>, div)

    setTimeout(() => {
      unmountComponentAtNode(div)
    }, 2400)
  }
}


export default Message