"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.__esModule = true;
var react_1 = require("react");
var umi_1 = require("umi");
var antd_1 = require("antd");
var detail_1 = require("@/components/detail");
var layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
var tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};
var charts = /** @class */ (function (_super) {
    __extends(charts, _super);
    function charts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    charts.prototype.render = function () {
        var _this = this;
        var userName = this.props.userName;
        var onFinish = function (values) {
            _this.props.dispatch({
                type: 'user/change',
                payload: values
            });
        };
        var onFinishFailed = function () {
            antd_1.message.error('请把表单完善');
        };
        return react_1["default"].createElement("div", null,
            react_1["default"].createElement("h2", { style: { textAlign: "center" } }, userName),
            react_1["default"].createElement(antd_1.Form, __assign({}, layout, { name: "basic", initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed }),
                react_1["default"].createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                    react_1["default"].createElement(antd_1.Input, null)),
                react_1["default"].createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                    react_1["default"].createElement(antd_1.Input.Password, null)),
                react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailLayout),
                    react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit"))),
            react_1["default"].createElement(detail_1["default"], null),
            react_1["default"].createElement(detail_1["default"], null),
            react_1["default"].createElement(detail_1["default"], null),
            react_1["default"].createElement(detail_1["default"], null));
    };
    return charts;
}(react_1["default"].Component));
exports["default"] = umi_1.connect(function (state) {
    return { userName: state.user.userName };
})(charts);
