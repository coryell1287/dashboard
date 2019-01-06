"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.replace");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function getUserId(_ref) {
  var req = _ref.req;

  if (!req.get('Authorization')) {
    throw new Error('Authentication is required.');
  }

  var auth = req.get('Authorization').replace('Bearer', '').trim();

  var verified = _jsonwebtoken.default.verify(auth, process.env.JWT_SECRET);

  return verified.email;
}

var _default = getUserId;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getUserId, "getUserId", "/home/coryell/Development/Dashboard/server/schema/utils/getUserId.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/utils/getUserId.js");
  leaveModule(module);
})();

;