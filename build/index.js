"use strict";

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _http = _interopRequireDefault(require("http"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _compression = _interopRequireDefault(require("compression"));

var _dotenv = require("dotenv");

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var port = process.env.PORT || 5000;
var app = (0, _express.default)();

var publicPath = _path.default.join(__dirname, '../dist');

var server = _http.default.createServer(app);

(0, _dotenv.config)();

_schema.default.applyMiddleware({
  app: app
});

app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use(require('morgan')('dev'));
app.use((0, _compression.default)());
app.use(_express.default.static(publicPath));

_schema.default.installSubscriptionHandlers(server);

app.get('*',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              response.sendFile(_path.default.resolve(publicPath, 'index.html'));
            } catch (e) {
              response.json(new Error('Something went wrong.'));
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
process.on('SIGINT',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.info('SIGINT signal received.');
          _context2.prev = 1;
          _context2.next = 4;
          return server.close();

        case 4:
          _context2.next = 10;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](1);
          process.exit(1);
          throw new Error(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this, [[1, 6]]);
})));

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return server.listen(port);

        case 2:
          console.log('🏭 This is the production build.');
          console.log("\uD83D\uDE80 Server has started and is listening on " + port);
          console.info('Graphql is listing on has started and is listening on', _schema.default.graphqlPath);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
}))();

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(port, "port", "/home/coryell/Development/Dashboard/server/index.js");
  reactHotLoader.register(app, "app", "/home/coryell/Development/Dashboard/server/index.js");
  reactHotLoader.register(publicPath, "publicPath", "/home/coryell/Development/Dashboard/server/index.js");
  reactHotLoader.register(server, "server", "/home/coryell/Development/Dashboard/server/index.js");
  leaveModule(module);
})();

;