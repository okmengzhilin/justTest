webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _testModule = __webpack_require__(3);

var _testModule2 = _interopRequireDefault(_testModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
	function Test() {
		_classCallCheck(this, Test);

		this.a = 1;
		this.b = new _testModule2.default().b;
		this.c = 2;
	}

	_createClass(Test, [{
		key: "init",
		value: function init() {
			alert(this.a);
		}
	}, {
		key: "tools",
		value: function tools() {
			return {
				func: function func() {}
			};
		}
	}, {
		key: "bindEvent",
		value: function bindEvent() {}
	}]);

	return Test;
}();

exports.default = Test;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestModule = function TestModule() {
	_classCallCheck(this, TestModule);

	this.b = 2;
};

exports.default = TestModule;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _init = __webpack_require__(0);

var _init2 = _interopRequireDefault(_init);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = new _init2.default();

/*
引入需要编译的sass
*/

/*
引入依赖
*/

var param = 2;

var param1 = 2;

var param3 = 5;

init.init();

(0, _jquery2.default)("#test").html(init.b);
// console.log(init.b);

/***/ })
],[4]);
//# sourceMappingURL=test.bundle.js.map