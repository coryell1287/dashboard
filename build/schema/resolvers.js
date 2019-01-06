"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rootQuery = _interopRequireDefault(require("./root-query/root-query.resolvers"));

var _rootMutation = _interopRequireDefault(require("./root-mutation/root-mutation.resolvers"));

var _subscription = _interopRequireDefault(require("./subscriptions/subscription.resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  RootQuery: _rootQuery.default,
  RootMutation: _rootMutation.default,
  Subscription: _subscription.default
};
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/resolvers.js");
  leaveModule(module);
})();

;