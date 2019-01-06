"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var subscriptionResolvers = {
  activeUsers: {
    subscribe: function subscribe(parent, args, _ref, info) {
      var pubSub = _ref.pubSub;
      console.log(pubSub);
      var count = 0;
      setInterval(function () {
        count++;
        pubSub.publish('ONLINE_NOTIFICATION', {
          activeUsers: {
            data: count,
            mutation: 'NEW_USER_SIGNED_IN'
          }
        });
      }, 1000);
      return pubSub.asyncIterator('ONLINE_NOTIFICATION');
    }
  }
};
var _default = subscriptionResolvers;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(subscriptionResolvers, "subscriptionResolvers", "/home/coryell/Development/Dashboard/server/schema/subscriptions/subscription.resolvers.js");
  reactHotLoader.register(_default, "default", "/home/coryell/Development/Dashboard/server/schema/subscriptions/subscription.resolvers.js");
  leaveModule(module);
})();

;