import React, { useState, useEffect } from 'react';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';
import classnames from 'classnames';
import Icon from '../Icon';
var MessageComponent = function (props) {
    var _a;
    var className = props.className, type = props.type;
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
        React.createElement("span", null, "\u8FD9\u662F\u6D88\u606F\u5F39\u6846\u7EC4\u4EF6"))), document.body));
};
var createMessage = function (type) {
    var div = document.createElement("div");
    render(React.createElement(MessageComponent, { type: type }), div);
    setTimeout(function () {
        unmountComponentAtNode(div);
    }, 2400);
};
var Message = {
    info: function () {
        createMessage("primary");
    },
    success: function () {
        createMessage("success");
    },
    warning: function () {
        createMessage("warning");
    },
    danger: function () {
        createMessage("danger");
    }
};
export default Message;
