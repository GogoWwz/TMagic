var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classnames from 'classnames';
// 按钮类型
export var ButtonType;
(function (ButtonType) {
    ButtonType["Default"] = "default";
    ButtonType["Primary"] = "primary";
    ButtonType["Success"] = "success";
    ButtonType["Warning"] = "warning";
    ButtonType["Danger"] = "danger";
    ButtonType["Info"] = "info";
    ButtonType["Link"] = "link";
})(ButtonType || (ButtonType = {}));
// 按钮HTML类型
export var ButtonHTMLType;
(function (ButtonHTMLType) {
    ButtonHTMLType["Submit"] = "submit";
    ButtonHTMLType["Reset"] = "reset";
    ButtonHTMLType["Button"] = "button";
})(ButtonHTMLType || (ButtonHTMLType = {}));
// 按钮尺寸
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "large";
    ButtonSize["Normal"] = "normal";
    ButtonSize["Small"] = "small";
})(ButtonSize || (ButtonSize = {}));
var Button = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, size = props.size, type = props.type, children = props.children, href = props.href, restProps = __rest(props, ["className", "disabled", "size", "type", "children", "href"]);
    var classes = classnames('tm-btn', className, (_a = {},
        _a["tm-btn__" + type] = type,
        _a["tm-btn__" + size] = size,
        _a['disabled'] = type === ButtonType.Link && disabled,
        _a));
    if (type === ButtonType.Link) {
        return (React.createElement("a", __assign({ href: href, className: classes }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
    }
};
Button.defaultProps = {
    type: ButtonType.Default
};
export default Button;