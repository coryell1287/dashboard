"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dseDriver = _interopRequireDefault(require("dse-driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var client = new _dseDriver.default.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'chatter'
});
var _default = client;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(client, "client", "/home/coryell/Development/Dashboard/server/config/db.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/config/db.js");
  leaveModule(module);
})();

;