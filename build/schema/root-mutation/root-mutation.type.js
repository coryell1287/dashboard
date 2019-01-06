"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  type RootMutation {\n    createUser(\n      firstname: String!,\n      surname: String!,\n      email: String!\n      password: String!\n    ): Applied\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var RootMutation = (0, _apolloServerExpress.gql)(_templateObject());
var _default = RootMutation;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RootMutation, "RootMutation", "/home/coryell/Development/Dashboard/server/schema/root-mutation/root-mutation.type.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/root-mutation/root-mutation.type.js");
  leaveModule(module);
})();

;