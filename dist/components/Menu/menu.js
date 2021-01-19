import React, { useState, createContext, cloneElement } from 'react';
import classNames from 'classnames';
var MenuContext = createContext({
    activeKey: 0,
    mode: "horizontal"
});
var Menu = function (props) {
    var _a;
    var defaultSeletedKey = props.defaultSeletedKey, className = props.className, mode = props.mode, children = props.children, onSelect = props.onSelect;
    var _b = useState(defaultSeletedKey), activeKey = _b[0], setActiveKey = _b[1];
    var classes = classNames('tm-menu', className, (_a = {},
        _a["tm-menu__" + mode] = mode,
        _a));
    var handleClick = function (key) {
        setActiveKey(key);
        if (onSelect) {
            onSelect(key);
        }
    };
    var passedContext = {
        activeKey: activeKey,
        onSelect: handleClick,
        mode: mode
    };
    var MenuItems = React.Children.map(children, function (child, index) {
        // 因为child是ReactNode类型，而displayName是存在函数式组件实例上的属性，所以需要进行类型断言
        var ChildElement = child;
        var displayName = ChildElement.type.displayName;
        if (displayName === 'MenuItem' || displayName === 'SubMenu') {
            return cloneElement(ChildElement, {
                index: index
            });
        }
        else {
            console.error("Warning: Menu has a child whitch is not a MenuItem component！");
        }
    });
    return (React.createElement("ul", { className: classes, role: "menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, MenuItems)));
};
Menu.defaultProps = {
    mode: "horizontal"
};
export { MenuContext };
export default Menu;
