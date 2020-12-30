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
var index_less_1 = require("./index.less");
var HeaderLook = /** @class */ (function (_super) {
    __extends(HeaderLook, _super);
    function HeaderLook(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            count: 1,
            visible: false,
            list: [2]
        };
        _this.showDrawer = function () {
            _this.setState({ visible: true });
        };
        _this.onClose = function () {
            _this.setState({ visible: false });
        };
        console.log('constructor');
        return _this;
    }
    HeaderLook.prototype.componentDidMount = function () {
        console.log('componentDidMount');
    };
    HeaderLook.prototype.componentDidUpdate = function () {
        console.log('componentDidUpdate');
    };
    HeaderLook.prototype.componentDidCatch = function () {
        console.log('componentDidCatch');
    };
    HeaderLook.prototype.shouldComponentUpdate = function () {
        console.log('shouldComponentUpdate');
        return true;
    };
    HeaderLook.prototype.componentWillUnmount = function () {
        console.log('componentWillUnmount');
    };
    HeaderLook.getDerivedStateFromProps = function (props, state) {
        // 修改state、props 无需setstate 就能直接修改初始结果
        console.log(props, state, 'getDerivedStateFromProps');
        return null;
    };
    HeaderLook.prototype.getSnapshotBeforeUpdate = function () {
        console.log('getSnapshotBeforeUpdate');
        return true;
    };
    HeaderLook.prototype.render = function () {
        var _this = this;
        console.log('render');
        var _a = this.props, dataName = _a.dataName, name = _a.name;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(antd_1.Button, { onClick: function () {
                    console.log(_this.props);
                    _this.setState({ visible: true });
                } }, dataName),
            react_1["default"].createElement(antd_1.Tag, { color: "red" }, this.state.count),
            react_1["default"].createElement(antd_1.Drawer, { title: "Basic Drawer", placement: "right", closable: false, onClose: this.onClose, visible: this.state.visible },
                react_1["default"].createElement(antd_1.Button, { onClick: function () {
                        var count = _this.state.count + 1;
                        var list = _this.state.list;
                        console.log(list.push(_this.state.count + 1));
                        _this.setState({
                            count: count
                        });
                    } },
                    "\u70B9\u51FB\u6211\u52A0 ",
                    this.state.count),
                this.state.list.map(function (e, i) {
                    return react_1["default"].createElement("p", { key: e + i, className: index_less_1["default"].p }, e);
                }))));
    };
    return HeaderLook;
}(react_1.Component));
exports["default"] = HeaderLook;
