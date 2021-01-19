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
import React, { cloneElement, useContext, useState } from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
var SubMenu = function (props) {
    var index = props.index, className = props.className, children = props.children;
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var mode = useContext(MenuContext).mode;
    var classes = classnames("tm-submenu", className, {
        "tm-submenu__active": false
    });
    var subMenuItemClasses = classnames("tm-sublist", {
        "tm-sublist__open": open
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!open);
    };
    var handleMouse = function (e, toggle) {
        e.preventDefault();
        setOpen(toggle);
    };
    var hoverEvents = mode === 'horizontal' ? {
        onMouseEnter: function (e) { return handleMouse(e, true); },
        onMouseLeave: function (e) { return handleMouse(e, false); },
    } : {};
    var clickEvents = mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var renderSubMenuItem = function () {
        var MenuItems = React.Children.map(children, function (child, idx) {
            var ChildElement = child;
            var displayName = ChildElement.type.displayName;
            if (displayName === 'MenuItem') {
                return cloneElement(ChildElement, {
                    index: index
                });
            }
            else {
                console.error("Warning: Menu has a child whitch is not a MenuItem component！");
            }
        });
        return (React.createElement("ul", { className: subMenuItemClasses }, MenuItems));
    };
    return (React.createElement("li", __assign({ className: classes }, hoverEvents),
        React.createElement("div", __assign({}, clickEvents), "SubMenu"),
        renderSubMenuItem()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
