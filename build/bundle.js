(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  console.log("hello word");
  console.log("gggg");

  var getName = function getName(name) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(name);
      }, 3000);
    });
  };

  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var a, b;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getName('lixin');

          case 2:
            a = _context.sent;
            _context.next = 5;
            return getName('ddddd');

          case 5:
            b = _context.sent;
            console.log(a, b);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();

}));
//# sourceMappingURL=bundle.js.map
