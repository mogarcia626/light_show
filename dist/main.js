/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/bay_area/bay_canvas.js":
/*!********************************************!*\
  !*** ./src/scripts/bay_area/bay_canvas.js ***!
  \********************************************/
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

/***/ "./src/scripts/bay_area/bay_canvas_launch.js":
/*!***************************************************!*\
  !*** ./src/scripts/bay_area/bay_canvas_launch.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ launchBayCanvas)
/* harmony export */ });
/* harmony import */ var _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/projectile */ "./src/scripts/projectiles/projectile.js");
/* harmony import */ var _projectiles_peony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projectiles/peony */ "./src/scripts/projectiles/peony.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");



function launchBayCanvas(bg, ctx, w, h) {
  var objects = [];
  var removeObjects = [];
  var newFireworks = [];
  var fac3d;
  setInterval(function () {
    objects.push(new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
      pos: [w * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(), h * ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(0.35) + 0.4)],
      vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(0.5) - 0.25, -0.75],
      acc: -0.01,
      color: _utils__WEBPACK_IMPORTED_MODULE_2__.COLORS[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.randInt)(_utils__WEBPACK_IMPORTED_MODULE_2__.COLORS.length)]
    }));
  }, 2000); // setInterval( () => {
  //     objects.push(new Projectile( {
  //         pos: [ w*rand(), h*(rand(0.12)+0.23)],
  //         vel: [rand(0.5)-0.25, -0.5],
  //         acc: -0.008,
  //         color: COLORS[randInt(COLORS.length)]
  //     }))
  // }, 900)  

  setInterval(function () {
    newFireworks = [];
    bg.drawOnCanvas(ctx);
    objects.forEach(function (firework, i) {
      firework.draw(ctx);
      firework.move();

      switch (firework.getName()) {
        case 'Projectile':
          if (firework.vel[1] > 0) {
            if (firework.pos[1] < 0.39 * h) {
              fac3d = 8;
            } else {
              fac3d = 1;
            }

            objects[i] = new _projectiles_peony__WEBPACK_IMPORTED_MODULE_1__.default({
              pos: firework.pos,
              vel: ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(0.15) + 0.5) / fac3d,
              color: firework.color,
              radius: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(firework.radius) + 1,
              trailLength: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.randInt)(10) + 10
            });
          }

          break;

        case 'Peony':
          if (firework.time > 400) {
            removeObjects.push(i);
          }

          break;

        default:
          break;
      }
    });
    removeObjects.forEach(function (idx) {
      delete objects[idx];
    });
    removeObjects = [];
    objects = objects.cleanArray();
    objects.concat(newFireworks);
  }, _utils__WEBPACK_IMPORTED_MODULE_2__.FPS);
}

/***/ }),

/***/ "./src/scripts/canvas_display.js":
/*!***************************************!*\
  !*** ./src/scripts/canvas_display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bay_area_bay_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bay_area/bay_canvas */ "./src/scripts/bay_area/bay_canvas.js");
/* harmony import */ var _bay_area_bay_canvas_launch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bay_area/bay_canvas_launch */ "./src/scripts/bay_area/bay_canvas_launch.js");



function CanvasDisplay(background) {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = 0.96 * window.innerWidth;
  canvas.height = Math.min(0.96 * window.innerWidth * 0.5625, 0.96 * window.innerHeight);
  var bg;

  switch (background) {
    case 'bay-area-canvas':
      bg = new _bay_area_bay_canvas__WEBPACK_IMPORTED_MODULE_0__.default();
      bg.drawOnCanvas(ctx);
      (0,_bay_area_bay_canvas_launch__WEBPACK_IMPORTED_MODULE_1__.default)(bg, ctx, canvas.width, canvas.height);

    default:
      bg = new _bay_area_bay_canvas__WEBPACK_IMPORTED_MODULE_0__.default();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasDisplay);

/***/ }),

/***/ "./src/scripts/projectiles/peony.js":
/*!******************************************!*\
  !*** ./src/scripts/projectiles/peony.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Peony = /*#__PURE__*/function () {
  function Peony(props) {
    var _this = this;

    _classCallCheck(this, Peony);

    this.pos = props.pos;
    this.vel = props.vel;
    this.color = props.color;
    this.radius = props.radius || 0.5;
    this.trailLength = props.trailLength || 15;
    this.smokeLength = props.smokeLength || 10;
    this.time = 0;
    var particleVectors = [];
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.circleVectorArray)(props.vel * 1.25, 8).forEach(function (vel) {
      particleVectors.push({
        vel: vel,
        pos: _this.pos,
        prevPos: [],
        smokePos: []
      });
    });
    this.particleVectors = particleVectors;
  }

  _createClass(Peony, [{
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      this.particleVectors.forEach(function (particle) {
        //Spearhead of projectile
        ctx.fillStyle = _this2.color;
        ctx.beginPath();
        ctx.arc(particle.pos[0], particle.pos[1], _this2.radius, 0, 2 * Math.PI);
        ctx.fill(); //Trail

        particle.prevPos.forEach(function (trail, i) {
          ctx.beginPath();
          ctx.arc(trail[0], trail[1], _this2.radius * i / _this2.trailLength, 0, 2 * Math.PI);
          ctx.fill();
        }); //Smoke trail
        // particle.smokePos.forEach((smoke, i) => {
        //     ctx.fillStyle = 'grey'
        //     ctx.beginPath();
        //     ctx.arc(smoke[0], smoke[1], this.radius*i/this.smokeLength, 0, 2 * Math.PI);
        //     ctx.fill(); 
        // });
      });
    }
  }, {
    key: "move",
    value: function move() {
      var _this3 = this;

      this.particleVectors.forEach(function (particle) {
        particle.prevPos.push(particle.pos);

        if (particle.prevPos.length > _this3.trailLength) {
          particle.smokePos.push(particle.prevPos.shift());
          if (particle.smokePos.length > _this3.smokeLength) particle.smokePos.shift();
        }

        particle.pos = [particle.pos[0] + particle.vel[0], particle.pos[1] + particle.vel[1]];
      });
      this.time = this.time + _utils__WEBPACK_IMPORTED_MODULE_0__.FPS;
    }
  }]);

  return Peony;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Peony);

/***/ }),

/***/ "./src/scripts/projectiles/projectile.js":
/*!***********************************************!*\
  !*** ./src/scripts/projectiles/projectile.js ***!
  \***********************************************/
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
    this.gravity = 0.12;
    this.radius = props.radius || 0.5;
    this.prevPos = [];
    this.smokePos = [];
    this.trailLength = props.trailLength || 10;
    this.smokeLength = props.smokeLength || 50;
    this.time = 0;
  }

  _createClass(Projectile, [{
    key: "particleVectors",
    value: function particleVectors() {}
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      //Spearhead of projectile
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.fill(); //Trail

      this.prevPos.forEach(function (trail, i) {
        ctx.beginPath();
        ctx.arc(trail[0], trail[1], _this.radius * i / _this.trailLength, 0, 2 * Math.PI);
        ctx.fill();
      }); //Smoke trail

      this.smokePos.forEach(function (smoke, i) {
        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.arc(smoke[0], smoke[1], _this.radius * i / _this.smokeLength, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
  }, {
    key: "move",
    value: function move() {
      this.prevPos.push(this.pos);

      if (this.prevPos.length > this.trailLength) {
        this.smokePos.push(this.prevPos.shift());
        if (this.smokePos.length > this.smokeLength) this.smokePos.shift();
      }

      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      this.vel[1] = this.vel[1] + this.acc;
      this.acc = Math.min(this.acc + .0005, this.gravity);
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
/* harmony export */   "subVectors": () => (/* binding */ subVectors),
/* harmony export */   "circleVectorArray": () => (/* binding */ circleVectorArray),
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "FPS": () => (/* binding */ FPS),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "inherits": () => (/* binding */ inherits)
/* harmony export */ });
/* harmony import */ var _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectiles/projectile */ "./src/scripts/projectiles/projectile.js");

function randInt(num) {
  return Math.floor(Math.random() * num);
}
function rand() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return Math.random() * num;
}
function subVectors(num, initialVecArr) {
  //initialVecArray is an array of 2 vectors with an equal velocity 
  var vecs = [];
  var velSquare = Math.pow(initialVecArr[0][0], 2) + Math.pow(initialVecArr[0][1], 2);
  var newVec = ['', ''];
  var xMult = 1;
  var yMult = 1;
  if (initialVecArr[0][0] < 0 || initialVecArr[1][0] < 0) xMult = -1;
  if (initialVecArr[0][1] < 0 || initialVecArr[1][1] < 0) yMult = -1; // if (num%2===1) {
  //     pairs = (num-1)/2
  //     let v = Math.sqrt(velSquare/2)
  //     vecs.push([xMult*v, yMult*v])
  // }

  var nums = [];

  for (var i = 0; i <= num; i++) {
    nums.push(i);
  }

  nums.forEach(function (n) {
    newVec[0] = n / num * (initialVecArr[1][0] - initialVecArr[0][0]);
    newVec[1] = Math.sqrt(velSquare - Math.pow(newVec[0], 2));
    vecs.push([xMult * newVec[0], yMult * newVec[1]]);
    vecs.push([xMult * newVec[1], yMult * newVec[0]]);
  });
  return vecs;
}
function circleVectorArray(vel, numPerQuadrant) {
  var ne = subVectors(numPerQuadrant, [[0, -vel], [vel, 0]]);
  var se = subVectors(numPerQuadrant, [[vel, 0], [0, vel]]);
  var sw = subVectors(numPerQuadrant, [[0, vel], [-vel, 0]]);
  var nw = subVectors(numPerQuadrant, [[-vel, 0], [0, -vel]]);
  return ne.concat(se).concat(sw).concat(nw);
} //Classname.getName() wil return 'class name'

Object.prototype.getName = function () {
  var funcNameRegex = /function (.{1,})\(/;
  var results = funcNameRegex.exec(this.constructor.toString());
  return results && results.length > 1 ? results[1] : "";
};

Array.prototype.cleanArray = function () {
  return this.filter(function (el) {
    return el;
  });
};

var COLORS = ['red', 'blue', 'green', 'pink', 'yellow', 'gold'];
var FPS = 1000 / 120; // Scale the length of a vector by the given amount.

function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}
;
function inherits(ChildClass, BaseClass) {
  ChildClass.prototype = Object.create(BaseClass.prototype);
  ChildClass.prototype.constructor = ChildClass;
}
;

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
/* harmony import */ var _scripts_canvas_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas_display */ "./src/scripts/canvas_display.js");


document.addEventListener("DOMContentLoaded", function () {
  //Close Welcome Modal and fill out Canvas with background of choice
  document.getElementById("close-modal").addEventListener('click', function () {
    document.getElementById("welcome-modal").style.display = "none";
    var canvasEl = (0,_scripts_canvas_display__WEBPACK_IMPORTED_MODULE_1__.default)('bay-area-canvas');
  }); // Add event listener for `click` events.

  var cv = document.querySelector('canvas');
  cv.addEventListener('click', function (event) {
    var context = this.getContext('2d');
    var x = this.offsetLeft + this.clientLeft;
    var y = this.offsetTop + this.clientTop;
    console.log("x:".concat((event.pageX - x) / this.width, "  y:").concat((event.pageY - y) / this.height));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map