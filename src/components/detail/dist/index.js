"use strict";
exports.__esModule = true;
var react_1 = require("react");
var umi_1 = require("umi");
var Detail = function (Props) {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, " \u5047\u8BBE\u8FD9\u513F\u662Fredux\u516C\u7528\u503C"),
        react_1["default"].createElement("p", null,
            "password: ",
            Props.form.username,
            " "),
        react_1["default"].createElement("p", null,
            "Hello : ",
            Props.form.password,
            " ")));
};
exports["default"] = umi_1.connect(function (state) {
    return { form: state.user.form };
})(Detail);
