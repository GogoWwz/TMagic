import React from 'react';
import classnames from 'classnames';
import './index.scss';
var DemoBlock = function (props) {
    var _a;
    var role = props.role;
    var classes = classnames("tm-demoblock", (_a = {},
        _a["tm-demo-" + role] = role,
        _a));
    return (React.createElement("div", { className: classes }, props.children));
};
export default DemoBlock;
