webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _App = __webpack_require__(1);
	
	var _App2 = _interopRequireDefault(_App);
	
	__webpack_require__(176);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new _App2.default();
	app.start();

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Start = __webpack_require__(173);
	
	var _Start2 = _interopRequireDefault(_Start);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	    function App() {
	        _classCallCheck(this, App);
	    }
	
	    _createClass(App, [{
	        key: 'start',
	
	        /**
	         * To Infinity and Beyond
	         */
	        value: function start() {
	            _reactDom2.default.render(_react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Start2.default, null)
	            ), document.getElementById('app'));
	        }
	    }]);
	
	    return App;
	}();
	
	exports.default = App;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _Background = __webpack_require__(174);
	
	var _Background2 = _interopRequireDefault(_Background);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Start = function (_React$Component) {
	    _inherits(Start, _React$Component);
	
	    function Start() {
	        _classCallCheck(this, Start);
	
	        var _this = _possibleConstructorReturn(this, (Start.__proto__ || Object.getPrototypeOf(Start)).call(this));
	
	        _this.uid = _this.uuid();
	        _this.scene = new _Background2.default();
	        return _this;
	    }
	
	    /**
	     * Generate a random unique string
	     * @returns {string}
	     */
	
	
	    _createClass(Start, [{
	        key: 'uuid',
	        value: function uuid() {
	            return 'a' + 'xxxxxxxxxyxxxxxxxx'.replace(/[xy]/g, function (c) {
	                var r = Math.random() * 16 | 0,
	                    v = c == 'x' ? r : r & 0x3 | 0x8;
	                return v.toString(16);
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.scene.setDomElement((0, _reactDom.findDOMNode)(this));
	            this.scene.launch();
	            this.scene.render();
	        }
	
	        /**
	         * @return {XML}
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { id: this.uid });
	        }
	    }]);
	
	    return Start;
	}(_react2.default.Component);
	
	// Start.propsTypes = {};
	
	
	exports.default = Start;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var THREE = __webpack_require__(175);
	
	var Background = function () {
	    function Background() {
	        _classCallCheck(this, Background);
	
	        this.el = {
	            scene: new THREE.Scene(),
	            camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
	            renderer: new THREE.WebGLRenderer()
	        };
	        this.els = {
	            geometry: new THREE.BoxGeometry(1, 1, 1),
	            material: new THREE.MeshBasicMaterial({ color: 0x00ff00 })
	        };
	    }
	
	    _createClass(Background, [{
	        key: 'setDomElement',
	        value: function setDomElement(el) {
	            this.dom = el;
	        }
	
	        /**
	         * Once the Start react element is mounted to the dom
	         * Render the Scene
	         */
	
	    }, {
	        key: 'launch',
	        value: function launch() {
	            // get the size of the window
	            this.el.renderer.setSize(window.innerWidth, window.innerHeight);
	            // get this dom element
	            this.dom.appendChild(this.el.renderer.domElement);
	
	            this.cube = new THREE.Mesh(this.els.geometry, this.els.material);
	            this.el.scene.add(this.cube);
	
	            this.light = new THREE.AmbientLight(0x404040); // soft white light
	            this.el.scene.add(this.light);
	
	            this.el.camera.position.z = 5;
	            // this.render();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            requestAnimationFrame(function () {
	                return _this.render();
	            });
	            this.el.renderer.render(this.el.scene, this.el.camera);
	            this.cube.rotation.y += 0.04;
	        }
	    }]);
	
	    return Background;
	}();
	
	exports.default = Background;

/***/ },

/***/ 176:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=main.js.map