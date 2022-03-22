// this is banner
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.pk01 = factory(global.axios));
})(this, (function (axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  var index = 42;

  var data = [
  	{
  		name: "张三",
  		age: 10
  	},
  	{
  		name: "李四",
  		age: 10
  	},
  	{
  		name: "王二",
  		age: 10
  	}
  ];

  // src/main.js
  var list = data;
  var main = (function () {
      console.log("the answer is ".concat(index, " sdf"));
      axios__default["default"].get("/ab/c").then(console.log);
      console.log(list);
  });

  return main;

}));
// this is footer
//# sourceMappingURL=pk01-umd.js.map
