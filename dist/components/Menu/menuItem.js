import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, children = props.children;
    var _a = useContext(MenuContext), currentIndex = _a.currentIndex, onSelect = _a.onSelect;
    var classes = classNames("tm-menuitem", className, {
        "tm-menuitem__disabled": disabled,
        "tm-menuitem__active": currentIndex === index
    });
    var handleClick = function () {
        if (!disabled && onSelect) {
            onSelect(index || 0);
        }
    };
    return (React.createElement("li", { className: classes, onClick: handleClick }, children));
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
