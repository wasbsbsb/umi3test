"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var index_less_1 = require("./index.less");
var index_ts_1 = require("@/store/index.ts");
var Option = antd_1.Select.Option;
function default_1(props) {
    var list = [{
            name: "fw123",
            code: "qq1"
        },
        {
            name: "fw456",
            code: "qq2"
        }, {
            name: "fw789",
            code: "qq3"
        }];
    var _a = react_1.useReducer(index_ts_1.reducer, index_ts_1.initialState), store = _a[0], dispatch = _a[1];
    var handleChange = function (value) { return dispatch({ type: "userName", payload: value }); };
    return (react_1["default"].createElement("div", { className: index_less_1["default"].t },
        react_1["default"].createElement("div", { className: index_less_1["default"].s },
            react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9", style: { width: 120 }, onChange: handleChange }, list.map(function (e) {
                return react_1["default"].createElement(Option, { key: e.code, value: e.name }, e.name);
            }))),
        react_1["default"].createElement("div", { className: index_less_1["default"].text },
            react_1["default"].createElement("p", null, "\u5047\u8BBE\u6709\u4EC0\u4E48\u6570\u636E\u9700\u8981\u66F4\u6539\u4F20\u9012\uFF1B"),
            react_1["default"].createElement("p", { className: index_less_1["default"].user },
                "user: ",
                store.userName),
            react_1["default"].createElement("p", { className: index_less_1["default"].user },
                "user: ",
                store.userName))));
}
exports["default"] = default_1;
