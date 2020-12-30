"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var index_less_1 = require("./index.less");
var umi_1 = require("umi");
var antd_1 = require("antd");
var titlebox_1 = require("@/components/titlebox");
var index_1 = require("@/server/index");
// 函数组件
exports["default"] = (function () {
    var _a = react_1.useState({ selectedRowKeys: [], selectList: [] }), selectedRows = _a[0], setSelectdList = _a[1];
    var _b = react_1.useState({ list: [], loading: false }), state = _b[0], setData = _b[1];
    var rowSelection = {
        onChange: function (selectedRowKeys, selectList) {
            setSelectdList({ selectedRowKeys: selectedRowKeys, selectList: selectList });
        }
    };
    var ButtonList = [
        {
            name: '新增名单',
            cli: function () {
                // 假设走接口
                if (state.loading)
                    return antd_1.message.info('加载中，请稍候');
                var data = {
                    key: "" + state.list.length,
                    name: 'John Brown ' + state.list.length,
                    age: 32 + state.list.length
                };
                setData(__assign(__assign({}, state), { list: __spreadArrays(state.list, [data]) }));
                antd_1.message.success('添加成功');
            }
        },
        {
            name: '名单提交',
            cli: function () {
                if (!selectedRows.selectList.length)
                    return antd_1.message.error('请先勾选进行名单提交');
                var modal = antd_1.Modal.info({
                    title: '名单提交',
                    content: "\u786E\u8BA4\u8981\u63D0\u4EA4" + selectedRows.selectList.map(function (e) { return e.name; }).join(),
                    onOk: function (r) { antd_1.message.success('提交成功'); r(true); }
                });
            }
        }
    ];
    react_1.useEffect(function () {
        setData(__assign(__assign({}, state), { loading: true }));
        var getl = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.getlist()];
                    case 1:
                        res = _a.sent();
                        setData({ list: res, loading: false });
                        return [2 /*return*/];
                }
            });
        }); };
        getl();
    }, []);
    var columns = [
        {
            title: 'name',
            key: 'name',
            dataIndex: 'name',
            render: function (e) { return react_1["default"].createElement("a", { onClick: function () { umi_1.history.push({ pathname: '/Detail', query: { name: e } }); } }, e); }
        },
        {
            title: 'age',
            key: 'age',
            dataIndex: 'age'
        },
        {
            title: 'Action',
            key: 'action',
            render: function (e) {
                return react_1["default"].createElement(antd_1.Button, { onClick: function () {
                        var list = state.list.filter(function (v) { return e.key !== v.key; });
                        setData(__assign(__assign({}, state), { list: list }));
                    } }, "\u5220\u9664");
            }
        },
    ];
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(titlebox_1["default"], null),
        ButtonList.map(function (e) {
            return react_1["default"].createElement(antd_1.Button, { key: e.name, className: index_less_1["default"].btn, onClick: e.cli },
                " ",
                e.name);
        }),
        react_1["default"].createElement(antd_1.Table, { pagination: false, className: index_less_1["default"].tab, rowSelection: __assign({ type: 'checkbox' }, rowSelection), columns: columns, loading: state.loading, dataSource: state.list }));
});
