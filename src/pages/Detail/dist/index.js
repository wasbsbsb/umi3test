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
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var umi_1 = require("umi");
var Detail = /** @class */ (function (_super) {
    __extends(Detail, _super);
    function Detail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Detail.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { style: { marginBottom: '18px' } },
                react_1["default"].createElement(antd_1.Button, { onClick: function () { umi_1.history.push('/'); } }, " \u8FD4\u56DE")),
            react_1["default"].createElement(antd_1.Card, { title: "\u8BE6\u60C5\u5361\u7247", style: { width: 300 } },
                react_1["default"].createElement("div", null,
                    "name\uFF1A",
                    umi_1.history.location.query.name))));
    };
    return Detail;
}(react_1["default"].Component));
exports["default"] = Detail;
