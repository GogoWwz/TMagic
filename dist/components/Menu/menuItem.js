import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
var MenuItem = function (props) {
    var disabled = props.disabled, className = props.className, children = props.children, tag = props.tag;
    var _a = useContext(MenuContext), activeKey = _a.activeKey, onSelect = _a.onSelect;
    var classes = classNames("tm-menuitem", className, {
        "tm-menuitem__disabled": disabled,
        "tm-menuitem__active": activeKey === tag
    });
    var handleClick = function () {
        if (!disabled && onSelect) {
            onSelect(tag);
        }
    };
    return (React.createElement("li", { className: classes, onClick: handleClick }, children));
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
