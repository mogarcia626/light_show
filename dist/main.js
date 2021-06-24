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
      ctx.arc(0.169 * w, 2.396 * h, 1.24 * w, 1.45 * Math.PI, 1.52 * Math.PI, false);
      ctx.lineTo(0.3 * w, 0.19 * h);
      ctx.lineTo(0.32 * w, 0.2 * h);
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

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bg.drawOnCanvas(ctx);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasDisplay);

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


document.addEventListener("DOMContentLoaded", function () {
  //Close Welcome Modal and fill out Canvas with background of choice
  document.getElementById("close-modal").addEventListener('click', function () {
    document.getElementById("welcome-modal").style.display = "none";
    var canvasEl = (0,_scripts_canvas__WEBPACK_IMPORTED_MODULE_1__.default)(this.className);
  }); // Add event listener for `click` events.

  document.querySelector('canvas').addEventListener('click', function (event) {
    var context = this.getContext('2d');
    var x = this.offsetLeft + this.clientLeft;
    var y = this.offsetTop + this.clientTop;
    console.log("x:".concat(event.pageX - x, "  y:").concat(event.pageY - y));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map