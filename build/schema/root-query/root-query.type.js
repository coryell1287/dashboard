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
  var data = _taggedTemplateLiteralLoose(["\n  type RootQuery {\n   signIn(email: String!, password: String!): User\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var queryEntryPoints = (0, _apolloServerExpress.gql)(_templateObject());
var _default = queryEntryPoints;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(queryEntryPoints, "queryEntryPoints", "/home/coryell/Development/Dashboard/server/schema/root-query/root-query.type.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/root-query/root-query.type.js");
  leaveModule(module);
})();

;