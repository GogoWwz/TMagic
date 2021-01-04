import React, { useState } from 'react';
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
    setTimeout(function () {
        setVisible(false);
    }, 2000);
    return (createPortal((React.createElement("div", { className: classes },
        React.createElement(Icon, { icon: "exclamation-circle", className: "t-message__icon" }),
        React.createElement("span", null, "\u8FD9\u662F\u6D88\u606F\u5F39\u6846\u7EC4\u4EF6"))), document.body));
};
var Message = {
    info: function () {
        var div = document.createElement("div");
        render(React.createElement(MessageComponent, { type: "primary" }), div);
        setTimeout(function () {
            unmountComponentAtNode(div);
        }, 2400);
    }
};
export default Message;
