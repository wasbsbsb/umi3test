"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var react_1 = require("react");

var index_less_1 = require("./index.less");

var antd_1 = require("antd");

var itemDel = function itemDel(e) {
  console.log(e);
};

var columns = [{
  title: 'name',
  key: 'name',
  dataIndex: 'name',
  render: function render(e) {
    return react_1["default"].createElement("a", null, e);
  }
}, {
  title: 'age',
  key: 'age',
  dataIndex: 'age'
}, {
  title: 'Action',
  key: 'action',
  render: function render(e) {
    return react_1["default"].createElement(antd_1.Button, {
      onClick: function onClick() {
        return itemDel(e);
      }
    }, "\u5220\u9664");
  }
}];
var data = [{
  key: 'test1',
  name: 'John Brown',
  age: 32
}, {
  key: 'age',
  name: 'Jim Green',
  age: 42
}];

function default_1() {
  var _a = react_1.useState([]),
      selectedRows = _a[0],
      setSelectdList = _a[1];

  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectList) {
      return setSelectdList(selectList);
    }
  };
  var ButtonList = [{
    name: '新增名单',
    cli: function cli() {
      console.log('我是新增');
    }
  }, {
    name: '名单提交',
    cli: function cli() {// 拿到table多选的列表将数据发给后台;
      // selectedRows
    }
  }];
  return react_1["default"].createElement("div", null, ButtonList.map(function (e) {
    return react_1["default"].createElement(antd_1.Button, {
      key: e.name,
      className: index_less_1["default"].btn,
      onClick: e.cli
    }, " ", e.name);
  }), react_1["default"].createElement(antd_1.Table, {
    className: index_less_1["default"].tab,
    rowSelection: __assign({
      type: 'checkbox'
    }, rowSelection),
    columns: columns,
    dataSource: data
  }));
}

exports["default"] = default_1;