"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _user = require("../user/user.controller");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var rootQueryResolvers = {
  signIn: function () {
    var _signIn = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, _ref, info) {
      var client;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              _context.prev = 1;
              return _context.abrupt("return", (0, _user.signInUser)(client, args));

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 5]]);
    }));

    function signIn(_x, _x2, _x3, _x4) {
      return _signIn.apply(this, arguments);
    }

    return signIn;
  }()
};
var _default = rootQueryResolvers;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootQueryResolvers, "rootQueryResolvers", "/home/coryell/Development/Dashboard/server/schema/root-query/root-query.resolvers.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/root-query/root-query.resolvers.js");
  leaveModule(module);
})();

;