import React, { useState, createContext } from 'react';
import classNames from 'classnames';
var MenuContext = createContext({ currentIndex: 0 });
var Menu = function (props) {
    var _a;
    var defaultSeletedKey = props.defaultSeletedKey, className = props.className, mode = props.mode, children = props.children, onSelect = props.onSelect;
    var _b = useState(defaultSeletedKey), currentIndex = _b[0], setActiveIndex = _b[1];
    var classes = classNames('tm-menu', className, (_a = {},
        _a["tm-menu__" + mode] = mode,
        _a));
    var handleClick = function (key) {
        setActiveIndex(key);
        if (onSelect) {
            onSelect(key);
        }
    };
    var passedContext = {
        currentIndex: currentIndex || 0,
        onSelect: handleClick
    };
    return (React.createElement("ul", { className: classes },
        React.createElement(MenuContext.Provider, { value: passedContext }, children)));
};
Menu.defaultProps = {
    mode: "horizontal"
};
export { MenuContext };
export default Menu;
