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
exports.__esModule = true;
exports["default"] = {
    namespace: "user",
    state: {
        userName: "我是redux内部的一些XXXXXdata",
        form: {}
    },
    reducers: {
        change: function (state, action) {
            return __assign(__assign({}, state), { form: action.payload });
        }
    }
};
