"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var umi_1 = require("umi");
var Header = antd_1.Layout.Header, Footer = antd_1.Layout.Footer, Content = antd_1.Layout.Content;
var List = [
    {
        name: "首页",
        key: "/"
    }, {
        name: "路由跳转",
        key: "/list"
    }, {
        name: "redux",
        key: "/charts"
    }, {
        name: "xxxx",
        key: "/x"
    }
];
exports["default"] = (function (props) {
    var _a = react_1.useState(umi_1.history.location.pathname), current = _a[0], setCount = _a[1];
    var changeSelect = function (item) {
        setCount(item.key);
        umi_1.history.push(item.key);
    };
    return (react_1["default"].createElement(antd_1.Layout, null,
        react_1["default"].createElement(Header, null,
            react_1["default"].createElement(antd_1.Menu, { theme: "dark", mode: "horizontal", onSelect: function (e) { changeSelect(e); }, selectedKeys: [current] }, List.map(function (e) { return react_1["default"].createElement(antd_1.Menu.Item, { key: e.key }, e.name); }))),
        react_1["default"].createElement(antd_1.Layout, null,
            react_1["default"].createElement(Content, { style: { padding: '18px' } }, props.children)),
        react_1["default"].createElement(Footer, null)));
});
