import React, { cloneElement, useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
var SubMenu = function (props) {
    var index = props.index, className = props.className, children = props.children;
    var currentIndex = useContext(MenuContext).currentIndex;
    var classes = classnames("tm-menuitem tm-submenu", className, {
        "tm-menuitem__active": index === currentIndex
    });
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
    return (React.createElement("li", { className: classes },
        React.createElement("div", null, "SubMenu"),
        React.createElement("ul", { className: "tm-sublist" }, MenuItems)));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
