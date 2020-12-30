"use strict";
exports.__esModule = true;
exports.getlist = void 0;
var data = [
    {
        key: 'test1',
        name: 'John Brown',
        age: 32
    },
    {
        key: 'age',
        name: 'Jim Green',
        age: 42
    },
];
// 假设这里是请求接口列
// 假设获取接口；
exports.getlist = function (url, param) {
    if (url === void 0) { url = {}; }
    if (param === void 0) { param = {}; }
    return new Promise(function (rs) { return setTimeout(function () { rs(data); }, 2000); });
};
