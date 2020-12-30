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
exports.reducer = exports.initialState = void 0;
exports.initialState = { count: 0, formValue: '', userName: "demo" };
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return __assign(__assign({}, state), { count: state.count + 1 });
        case 'decrement':
            return { count: state.count - 1 };
        case 'userName':
            return __assign(__assign({}, state), { userName: action.payload });
        default:
            throw new Error();
    }
}
exports.reducer = reducer;
