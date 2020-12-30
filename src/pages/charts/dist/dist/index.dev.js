"use strict";

exports.__esModule = true;

var react_1 = require("react");

var testLife_1 = require("@/components/testLife"); // const initialState = { count: 0 };


var index_1 = require("@/store/index");

exports["default"] = function () {
  var _a = react_1.useState(''),
      InputValue = _a[0],
      setInputValue = _a[1];

  var _b = react_1.useReducer(index_1.reducer, index_1.initialState),
      state = _b[0],
      dispatch = _b[1];

  var connectData = function connectData(e) {
    dispatch({
      type: 'increment'
    });
    console.log(state);
    console.log(e.target.value);
  };

  return react_1["default"].createElement("div", null, react_1["default"].createElement("input", {
    value: state.count,
    type: "text",
    onChange: connectData
  }), react_1["default"].createElement(testLife_1["default"], null));
};