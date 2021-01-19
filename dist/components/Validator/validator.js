import React, { cloneElement, useMemo, useState } from 'react';
import classnames from 'classnames';
import _ from './rules';
var ChildrenLegalName = [
    "Input"
];
var Validator = function (props) {
    var validates = props.validates, classNames = props.classNames, children = props.children;
    var _a = useState(true), valid = _a[0], setValid = _a[1];
    var _b = useState(""), mes = _b[0], setMes = _b[1];
    var classes = classnames("tm-vali", classNames);
    // 校验器进行校验
    var valideRules = useMemo(function () {
        return Object.keys(validates);
    }, [validates]);
    var validate = function (val) {
        var valueType = "string";
        if (valideRules.includes("required")) {
            var ruleValidator = validates["required"];
            // 如果为true 或者为 validtor构造器，则进入校验，否则跳过
            if (ruleValidator) {
                var requiredValid = _.isEmpty(val);
                setValid(requiredValid);
                var message = "不能为空";
                if (typeof ruleValidator === 'object') {
                    message = ruleValidator.message || message;
                }
                if (!requiredValid) {
                    setMes(message);
                    return;
                }
            }
        }
        if (valideRules.includes("num")) {
            var message = validates["num"].message;
            var numValid = _.isNum(val);
            valueType = "number";
            setValid(numValid);
            if (!numValid) {
                setMes(message || "请输入纯数字");
                return;
            }
        }
        if (valideRules.includes("min")) {
            var _a = validates["min"], message = _a.message, _b = _a.value, value = _b === void 0 ? 10 : _b;
            var minValid = _.isAboveLen(val, value);
            if (valueType === 'number') {
                minValid = _.isAboveNum(val, value);
            }
            setValid(minValid);
            if (!minValid) {
                setMes(message || "请输入正确范围的值");
                return;
            }
        }
        if (valideRules.includes("custom")) {
            var _c = validates["custom"], rule = _c.rule, message = _c.message;
            if (typeof rule !== 'function') {
                console.error("Tmagic Warning: custom rule must be a function！");
                return;
            }
            var customValid = rule(val);
            if (typeof customValid !== 'boolean') {
                console.error("Tmagic Warning: custom rule must return a boolean！");
            }
            setValid(customValid);
            if (!customValid) {
                setMes(message || "自定义校验规则失败");
            }
        }
    };
    // 渲染子组件
    var rendeFormComponent = function () {
        var ChildElement = children;
        var _a = ChildElement.type.displayName, displayName = _a === void 0 ? "" : _a;
        if (ChildrenLegalName.includes(displayName)) {
            return cloneElement(ChildElement, {
                defaultValue: "defaultValue",
                onChange: changeInput,
                className: valid ? "" : "tm-input__error"
            });
        }
        else {
            console.error("Tmagic Warning: Validator component must accept legal verifiable children！");
        }
    };
    var changeInput = function (e) {
        validate(e.target.value);
    };
    return (React.createElement("div", { className: classes },
        rendeFormComponent(),
        !valid && React.createElement("div", { className: "tm-vali__err" }, mes)));
};
Validator.defaultProps = {};
export default Validator;
