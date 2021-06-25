/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/bay_canvas.js":
/*!***********************************!*\
  !*** ./src/scripts/bay_canvas.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BayCanvas)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BayCanvas = /*#__PURE__*/function () {
  function BayCanvas() {
    _classCallCheck(this, BayCanvas);

    this.width = 0.96 * window.innerWidth;
    this.height = Math.min(0.96 * window.innerWidth * 0.5625, 0.96 * window.innerHeight);
  }

  _createClass(BayCanvas, [{
    key: "draw",
    value: function draw(ctx) {
      var h = this.height;
      var w = this.width; // fill rectancle

      ctx.fillStyle = '#210F1F';
      ctx.beginPath();
      ctx.rect(0, 0, w, h);
      ctx.rect(0, 0, w, h);
      ctx.fill(); // sky gradient

      var skyGrd = ctx.createLinearGradient(0, 0.316 * h, 0, 0.05 * h);
      skyGrd.addColorStop(0, '#775575');
      skyGrd.addColorStop(0.5, '#362E57');
      skyGrd.addColorStop(1, '#210F1F');
      ctx.fillStyle = skyGrd;
      ctx.fillRect(0, 0, w, 0.316 * h); // ground gradient

      var groundGrd = ctx.createLinearGradient(0, 0.5 * h, 0, h);
      groundGrd.addColorStop(0, '#210F1F');
      groundGrd.addColorStop(0.6, '#222222');
      groundGrd.addColorStop(0.9, 'black');
      ctx.fillStyle = groundGrd;
      ctx.fillRect(0, 0.5 * h, w, h); // bay

      ctx.beginPath();
      ctx.moveTo(0, 0.33 * h);
      ctx.lineTo(w, 0.35 * h);
      ctx.lineTo(w, 0.4 * h);
      ctx.lineTo(0, 0.45 * h);
      ctx.closePath();
      ctx.fillStyle = "#2B2348";
      ctx.fill(); // SF hills

      ctx.beginPath();
      ctx.moveTo(0, 0.215 * h);
      ctx.lineTo(0.01 * w, 0.215 * h);
      ctx.lineTo(0.02 * w, 0.205 * h);
      ctx.lineTo(0.025 * w, 0.205 * h);
      ctx.lineTo(0.035 * w, 0.216 * h);
      ctx.lineTo(0.12 * w, 0.205 * h);
      ctx.lineTo(0.125 * w, 0.21 * h);
      ctx.lineTo(0.138 * w, 0.205 * h);
      ctx.lineTo(.15 * w, 0.19 * h);
      ctx.lineTo(0.168 * w, 0.207 * h);
      ctx.lineTo(0.18 * w, 0.205 * h);
      ctx.lineTo(0.193 * w, 0.191 * h);
      ctx.lineTo(0.205 * w, 0.194 * h);
      ctx.lineTo(0.21 * w, 0.2 * h);
      ctx.lineTo(0.24 * w, 0.205 * h);
      ctx.lineTo(0.254 * w, 0.18 * h);
      ctx.lineTo(0.281 * w, 0.185 * h);
      ctx.lineTo(0.297 * w, 0.17 * h);
      ctx.lineTo(0.328 * w, 0.205 * h);
      ctx.lineTo(0.335 * w, 0.2 * h);
      ctx.lineTo(0.398 * w, 0.237 * h);
      ctx.arc(0.423 * w, 0.381 * h, .085 * w, 1.41 * Math.PI, 1.65 * Math.PI, false);
      ctx.lineTo(0.519 * w, 0.237 * h);
      ctx.lineTo(0.55 * w, 0.22 * h);
      ctx.lineTo(0.56 * w, 0.22 * h);
      ctx.lineTo(0.581 * w, 0.237 * h);
      ctx.lineTo(0.69 * w, 0.26 * h);
      ctx.lineTo(0.75 * w, 0.24 * h);
      ctx.lineTo(0.8 * w, 0.27 * h);
      ctx.lineTo(0.85 * w, 0.27 * h);
      ctx.lineTo(0.9 * w, 0.237 * h);
      ctx.lineTo(0.95 * w, 0.26 * h);
      ctx.lineTo(w, 0.3 * h);
      ctx.lineTo(w, 0.35 * h);
      ctx.lineTo(0, 0.33 * h);
      ctx.closePath();
      ctx.fillStyle = "#0B0917";
      ctx.fill();
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(ctx) {
      this.draw(ctx);
    }
  }]);

  return BayCanvas;
}();



/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bay_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bay_canvas */ "./src/scripts/bay_canvas.js");
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectile */ "./src/scripts/projectile.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");



var COLORS = ['red', 'blue', 'green', 'pink', 'yellow', 'gold'];

function CanvasDisplay(background) {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = 0.96 * window.innerWidth;
  canvas.height = Math.min(0.96 * window.innerWidth * 0.5625, 0.96 * window.innerHeight);
  var bg;

  switch (background) {
    case 'bay-area-canvas':
      bg = new _bay_canvas__WEBPACK_IMPORTED_MODULE_0__.default();

    default:
      bg = new _bay_canvas__WEBPACK_IMPORTED_MODULE_0__.default();
  }

  bg.drawOnCanvas(ctx);
  var objects = [];
  setInterval(function () {
    objects.push(new _projectile__WEBPACK_IMPORTED_MODULE_1__.default({
      pos: [canvas.width * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(), canvas.height * ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(0.3) + 0.4)],
      vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(0.5) - 0.25, -0.5],
      acc: -0.01,
      color: COLORS[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.randInt)(COLORS.length)]
    }));
  }, 100);
  setInterval(function () {
    var removeObjects = [];
    bg.drawOnCanvas(ctx);
    objects.forEach(function (firework, i) {
      firework.draw(ctx);
      firework.move();

      switch (firework.getName()) {
        case 'Projectile':
          if (firework.vel[1] > 0.25) {
            removeObjects.push(i);
          }

        default:
          break;
      }
    });
    removeObjects.forEach(function (idx) {
      delete objects[idx];
    });
  }, 1000 / 60);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasDisplay);

/***/ }),

/***/ "./src/scripts/peony.js":
/*!******************************!*\
  !*** ./src/scripts/peony.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile */ "./src/scripts/projectile.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Peony = /*#__PURE__*/function (_Projectile) {
  _inherits(Peony, _Projectile);

  var _super = _createSuper(Peony);

  function Peony() {
    _classCallCheck(this, Peony);

    return _super.call(this);
  }

  _createClass(Peony, [{
    key: "test",
    value: function test() {
      console.log(this.props);
    }
  }]);

  return Peony;
}(_projectile__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Peony);

/***/ }),

/***/ "./src/scripts/projectile.js":
/*!***********************************!*\
  !*** ./src/scripts/projectile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Projectile = /*#__PURE__*/function () {
  function Projectile(props) {
    _classCallCheck(this, Projectile);

    this.pos = props.pos;
    this.vel = props.vel;
    this.acc = props.acc;
    this.color = props.color;
    this.gravity = 0.098;
    this.radius = 0.5;
    this.prevPos = [];
    this.trailLength = 20;
  }

  _createClass(Projectile, [{
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.fill();
      this.prevPos.forEach(function (trail, i) {
        ctx.beginPath();
        ctx.arc(trail[0], trail[1], _this.radius * i / _this.trailLength, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
  }, {
    key: "move",
    value: function move() {
      this.prevPos.push(this.pos);
      if (this.prevPos.length > this.trailLength) this.prevPos.shift();
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      this.vel[1] = this.vel[1] + this.acc;
      this.acc = Math.min(this.acc + 0.0005, this.gravity);
    }
  }]);

  return Projectile;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projectile);

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randInt": () => (/* binding */ randInt),
/* harmony export */   "rand": () => (/* binding */ rand),
/* harmony export */   "dir": () => (/* binding */ dir),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "norm": () => (/* binding */ norm),
/* harmony export */   "randomVec": () => (/* binding */ randomVec),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "inherits": () => (/* binding */ inherits)
/* harmony export */ });
function randInt(num) {
  return Math.floor(Math.random() * num);
}
function rand() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return Math.random() * num;
}

Object.prototype.getName = function () {
  var funcNameRegex = /function (.{1,})\(/;
  var results = funcNameRegex.exec(this.constructor.toString());
  return results && results.length > 1 ? results[1] : "";
}; // Normalize the length of the vector to 1, maintaining direction.


function dir(vec) {
  var norm = norm(vec);
  return Util.scale(vec, 1 / norm);
}
; // Find distance between two points.

function dist(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
}
; // Find the length of the vector.

function norm(vec) {
  return dist([0, 0], vec);
}
; // Return a randomly oriented vector with the given length.

function randomVec(length) {
  var deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}
; // Scale the length of a vector by the given amount.

function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}
;
function inherits(ChildClass, BaseClass) {
  ChildClass.prototype = Object.create(BaseClass.prototype);
  ChildClass.prototype.constructor = ChildClass;
}
; // export function wrap(coord, max) {
//     if (coord < 0) {
//         return max - (coord % max);
//     } else if (coord > max) {
//         return coord % max;
//     } else {
//         return coord;
//     }
// }

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_peony__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/peony */ "./src/scripts/peony.js");



document.addEventListener("DOMContentLoaded", function () {
  //Close Welcome Modal and fill out Canvas with background of choice
  // document.getElementById("close-modal").addEventListener('click', function() {        
  //     document.getElementById("welcome-modal").style.display="none";
  var canvasEl = (0,_scripts_canvas__WEBPACK_IMPORTED_MODULE_1__.default)('bay-area-canvas'); // })    
  // Add event listener for `click` events.

  var cv = document.querySelector('canvas');
  cv.addEventListener('click', function (event) {
    var context = this.getContext('2d');
    var x = this.offsetLeft + this.clientLeft;
    var y = this.offsetTop + this.clientTop;
    console.log("x:".concat((event.pageX - x) / this.width, "  y:").concat((event.pageY - y) / this.height));
  });
  peny = new _scripts_peony__WEBPACK_IMPORTED_MODULE_2__.default({
    pos: [cv.width / 2, cv.height * .8],
    vel: [0, -2],
    acc: -0.01,
    color: 'gold'
  });
  peny.test();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map