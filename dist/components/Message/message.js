import React, { useState, useEffect } from 'react';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';
import classnames from 'classnames';
import Icon from '../Icon';
var MessageComponent = function (props) {
    var _a;
    var className = props.className, type = props.type, children = props.children;
    var _b = useState(true), visible = _b[0], setVisible = _b[1];
    var classes = classnames("tm-message", className, (_a = {},
        _a["tm-message__" + type] = true,
        _a["tm-message__" + (visible ? 'in' : "out")] = true,
        _a));
    useEffect(function () {
        setTimeout(function () {
            setVisible(false);
        }, 2000);
    }, []);
    return (createPortal((React.createElement("div", { className: classes },
        type === 'primary' && React.createElement(Icon, { icon: "exclamation-circle", className: "t-message__icon" }),
        type === 'success' && React.createElement(Icon, { icon: "check-circle", className: "t-message__icon" }),
        type === 'warning' && React.createElement(Icon, { icon: "exclamation-triangle", className: "t-message__icon" }),
        type === 'danger' && React.createElement(Icon, { icon: "times-circle", className: "t-message__icon" }),
        React.createElement("span", null, children || '这是消息弹框组件'))), document.body));
};
var createMessage = function (type, msg) {
    var div = document.createElement("div");
    render(React.createElement(MessageComponent, { type: type }, msg), div);
    setTimeout(function () {
        unmountComponentAtNode(div);
    }, 2400);
};
var Message = {
    Info: function (msg) {
        createMessage("primary", msg);
    },
    Success: function (msg) {
        createMessage("success", msg);
    },
    Warning: function (msg) {
        createMessage("warning", msg);
    },
    Danger: function (msg) {
        createMessage("danger", msg);
    }
};
export default Message;
