"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _user = _interopRequireDefault(require("./user/user.type"));

var _db = _interopRequireDefault(require("../config/db"));

var _rootQuery = _interopRequireDefault(require("./root-query/root-query.type"));

var _rootMutation = _interopRequireDefault(require("./root-mutation/root-mutation.type"));

var _subscription = _interopRequireDefault(require("./subscriptions/subscription.type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  schema {\n    query: RootQuery,\n    mutation: RootMutation,\n    subscription: Subscription\n  }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var pubSub = new _apolloServerExpress.PubSub();
var SchemaDefinition = (0, _apolloServerExpress.gql)(_templateObject());
var apollo = new _apolloServerExpress.ApolloServer({
  typeDefs: [SchemaDefinition, _rootQuery.default, _rootMutation.default, _subscription.default, _user.default],
  context: function context(request) {
    return {
      client: _db.default,
      pubSub: pubSub,
      request: request
    };
  },
  resolvers: _resolvers.default,
  introspection: false,
  playground: false
});
var _default = apollo;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pubSub, "pubSub", "/home/coryell/Development/Dashboard/server/schema/index.js");
  reactHotLoader.register(SchemaDefinition, "SchemaDefinition", "/home/coryell/Development/Dashboard/server/schema/index.js");
  reactHotLoader.register(apollo, "apollo", "/home/coryell/Development/Dashboard/server/schema/index.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/index.js");
  leaveModule(module);
})();

;