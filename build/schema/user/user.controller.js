"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userExists = userExists;
exports.insertUser = insertUser;
exports.signInUser = signInUser;

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function userExists(_x, _x2) {
  return _userExists.apply(this, arguments);
}

function _userExists() {
  _userExists = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(client, email) {
    var query, params, results;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = 'SELECT email from userprofile WHERE email = ?';
            params = [email];
            _context.prev = 2;
            _context.next = 5;
            return client.execute(query, params);

          case 5:
            results = _context.sent;
            return _context.abrupt("return", results.rows[0]);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            throw new Error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 9]]);
  }));
  return _userExists.apply(this, arguments);
}

function insertUser(_x3, _x4) {
  return _insertUser.apply(this, arguments);
}

function _insertUser() {
  _insertUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(client, args) {
    var token, authorization, tokens, insert, password, params, results;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = _jsonwebtoken.default.sign({
              email: args.email
            }, process.env.JWT_SECRET, {
              expiresIn: process.env.TOKEN_EXPIRY
            });
            authorization = {
              read: true,
              write: false
            };
            tokens = {
              access: 'business owner',
              token: token
            };
            insert = 'INSERT INTO userprofile(email, firstname, surname, password, tokens, authorization) VALUES(?, ?, ?, ?, ?, ?) IF NOT EXISTS';
            _context2.next = 6;
            return _bcryptjs.default.hash(args.password, 10);

          case 6:
            password = _context2.sent;
            params = [args.email, args.firstname, args.surname, password, tokens, authorization];
            _context2.prev = 8;
            _context2.next = 11;
            return client.execute(insert, params, {
              prepare: true
            });

          case 11:
            results = _context2.sent;
            return _context2.abrupt("return", {
              applied: Object.values(results.rows[0])[0]
            });

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](8);
            throw new Error(_context2.t0);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 15]]);
  }));
  return _insertUser.apply(this, arguments);
}

function signInUser(_x5, _x6) {
  return _signInUser.apply(this, arguments);
}

function _signInUser() {
  _signInUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(client, args) {
    var query, params, results, isMatch, user, initialArr, initial;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            query = 'SELECT * FROM userprofile WHERE email = ?';
            params = [args.email];
            _context3.next = 4;
            return client.execute(query, params);

          case 4:
            results = _context3.sent;
            _context3.next = 7;
            return _bcryptjs.default.compare(args.password, results.rows[0].password);

          case 7:
            isMatch = _context3.sent;

            if (isMatch) {
              _context3.next = 10;
              break;
            }

            throw new Error('Email or password does not match.');

          case 10:
            user = _objectSpread({}, results.rows[0]);
            initialArr = [];
            initial = '';
            initialArr.push(user.firstname, user.surname);
            initial = initialArr.map(function (n) {
              return n[0];
            }).join('');
            return _context3.abrupt("return", _objectSpread({}, user, {
              initial: initial
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _signInUser.apply(this, arguments);
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(userExists, "userExists", "/home/coryell/Development/Dashboard/server/schema/user/user.controller.js");
  reactHotLoader.register(insertUser, "insertUser", "/home/coryell/Development/Dashboard/server/schema/user/user.controller.js");
  reactHotLoader.register(signInUser, "signInUser", "/home/coryell/Development/Dashboard/server/schema/user/user.controller.js");
  leaveModule(module);
})();

;