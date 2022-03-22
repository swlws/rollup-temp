"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theAnswer = _interopRequireDefault(require("the-answer"));

var _axios = _interopRequireDefault(require("axios"));

var _data = _interopRequireDefault(require("./data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/main.js
const list = _data.default;

var _default = function _default() {
  console.log("the answer is ".concat(_theAnswer.default, " sdf"));

  _axios.default.get("/ab/c").then(console.log);

  console.log(list);
};

exports.default = _default;