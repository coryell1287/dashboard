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
  var data = _taggedTemplateLiteralLoose(["\n  type UserProfile {\n   signIn(email: String!, password: String!): User\n  }\n  \n  type User {\n    firstname: String!\n    surname: String!\n    email: String!\n    initial: String!\n    password: String!\n    tokens: Tokens\n    authorization: Auth! \n  }\n  \n  type Auth {\n    read: Boolean!\n    write: Boolean!\n  }\n  \n  type Tokens {\n     access: String\n     token: String\n  }\n  \n  type Applied {\n   applied: Boolean\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var userProfileDef = (0, _apolloServerExpress.gql)(_templateObject());
var _default = userProfileDef;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(userProfileDef, "userProfileDef", "/home/coryell/Development/Dashboard/server/schema/user/user.type.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/user/user.type.js");
  leaveModule(module);
})();

;