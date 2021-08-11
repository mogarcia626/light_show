/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/bay_area/bay_background.js":
/*!************************************************!*\
  !*** ./src/scripts/bay_area/bay_background.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawBayAreaBackground": () => (/* binding */ drawBayAreaBackground)
/* harmony export */ });
function drawBayAreaBackground(ctx, w, h) {
  // fill rectancle
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

/***/ }),

/***/ "./src/scripts/bay_area/bay_canvas.js":
/*!********************************************!*\
  !*** ./src/scripts/bay_area/bay_canvas.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BayCanvas)
/* harmony export */ });
/* harmony import */ var _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/projectile */ "./src/scripts/projectiles/projectile.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
/* harmony import */ var _nav_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav_util */ "./src/scripts/nav_util.js");
/* harmony import */ var _bay_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bay_background */ "./src/scripts/bay_area/bay_background.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var BayCanvas = /*#__PURE__*/function () {
  function BayCanvas() {
    _classCallCheck(this, BayCanvas);

    this.background = 'bay-area-canvas';
    this.width = 0.9 * window.innerWidth;
    this.height = Math.min(0.9 * window.innerWidth * 0.5625, 0.9 * window.innerHeight);
    this.activeFireworks = [];
    this.removeFireworks = [];
    this.newfireworks = [];
    this.fac3d = 1;
    this.time = 1000;
    this.colorList = _utils__WEBPACK_IMPORTED_MODULE_1__.establishColorList();
    this.active = true;
    this.closed = false;
  }

  _createClass(BayCanvas, [{
    key: "activate",
    value: function activate(ctx) {
      this.active = true;
      this.renderCanvas(ctx);
      this.launchFireworks(ctx);
      this.addEventListeners(ctx);
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(ctx) {
      (0,_bay_background__WEBPACK_IMPORTED_MODULE_3__.drawBayAreaBackground)(ctx, this.width, this.height);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(ctx) {
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_2__.returnToHome)(this);
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_2__.openColorMenu)(this, ctx);
    }
  }, {
    key: "launchFireworks",
    value: function launchFireworks() {
      var _this = this;

      var _ref = [this.width, this.height],
          w = _ref[0],
          h = _ref[1];
      var launching = setInterval(function () {
        if (_this.activeFireworks.length < 30 && _this.active && _this.colorList.length > 0) {
          ///Bottom Left
          setTimeout(function () {
            var pw = w * _utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5),
                ph = h * (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.36) + 0.44); // 0.4 - 0.8

            _this.activeFireworks.push(new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5 * w) / w - 0.25, -ph / 400],
              acc: -.01,
              color: _utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor(_this.colorList),
              radius: ph / 250
            }));
          }, _utils__WEBPACK_IMPORTED_MODULE_1__.rand(_this.time)); //Bottom Right

          setTimeout(function () {
            var pw = w * (0.5 + _utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5)),
                ph = h * (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.36) + 0.4); // 0.4 - 0.8

            _this.activeFireworks.push(new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5 * w) / w - 0.25, -h / 400],
              acc: -0.01,
              color: _utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor(_this.colorList),
              radius: ph / 250
            }));
          }, _utils__WEBPACK_IMPORTED_MODULE_1__.rand(_this.time)); //Top Left

          setTimeout(function () {
            var pw = w * _utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5),
                ph = h * (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.12) + 0.23);

            _this.activeFireworks.push(new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5 * w) / w - 0.25, -h / 800],
              acc: -0.008,
              color: _utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor(_this.colorList),
              radius: ph / 250
            }));
          }, _utils__WEBPACK_IMPORTED_MODULE_1__.rand(_this.time)); //Top Right

          setTimeout(function () {
            var pw = w * (0.5 + _utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5)),
                ph = h * (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.075) + 0.275);

            _this.activeFireworks.push(new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5 * w) / w - 0.25, -h / 800],
              acc: -0.008,
              color: _utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor(_this.colorList),
              radius: ph / 250
            }));
          }, _utils__WEBPACK_IMPORTED_MODULE_1__.rand(_this.time));
        }

        ;
        if (_this.closed) _utils__WEBPACK_IMPORTED_MODULE_1__.freeze(launching);
      }, this.time);
    }
  }, {
    key: "renderCanvas",
    value: function renderCanvas(ctx) {
      var _this2 = this;

      var renderFireworks = setInterval(function () {
        if (_this2.active) {
          _this2.drawBackground(ctx);

          _this2.activeFireworks.forEach(function (firework, i) {
            firework.draw(ctx);
            firework.move();

            switch (firework.getName()) {
              case 'Projectile':
                if (firework.vel[1] > 0.15) {
                  if (firework.pos[1] < 0.39 * _this2.height) {
                    _this2.fac3d = firework.pos[1] / 200;
                  } else {
                    _this2.fac3d = firework.pos[1] / 175;
                  }

                  _this2.activeFireworks[i] = _utils__WEBPACK_IMPORTED_MODULE_1__.randomFirework(firework, _this2.fac3d);
                }

                break;

              case 'Peony':
                if (firework.time > 550) _this2.removeFireworks.push(i);
                break;

              case 'Chrysanthemum':
                if (firework.time > 600) _this2.removeFireworks.push(i);
                break;

              default:
                break;
            }
          });
        }

        _this2.removeFireworks.forEach(function (idx) {
          delete _this2.activeFireworks[idx];
        });

        _this2.removeFireworks = [];
        _this2.activeFireworks = _this2.activeFireworks.cleanArray();
        if (_this2.closed) _utils__WEBPACK_IMPORTED_MODULE_1__.freeze(renderFireworks);
      }, _utils__WEBPACK_IMPORTED_MODULE_1__.FPS);
      var settingsButtons = document.getElementsByClassName('open-modal');
      Object.values(settingsButtons).forEach(function (button) {
        button.addEventListener('click', function (e) {
          _this2.active = false;
        });
      });
    }
  }]);

  return BayCanvas;
}();



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
/* harmony import */ var _solid_color_solid_color_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solid_color/solid_color_canvas */ "./src/scripts/solid_color/solid_color_canvas.js");



function CanvasDisplay(background) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = 0.9 * window.innerWidth;
  canvas.height = Math.min(0.9 * window.innerWidth * 0.5625, 0.9 * window.innerHeight);
  var bg;

  switch (background) {
    case 'bay-area-canvas':
      bg = new _bay_area_bay_canvas__WEBPACK_IMPORTED_MODULE_0__.default();
      bg.activate(ctx);
      break;

    case 'solid-color-canvas':
      bg = new _solid_color_solid_color_canvas__WEBPACK_IMPORTED_MODULE_1__.default(color);
      bg.activate(ctx);
      break;

    default:
      bg = new _bay_area_bay_canvas__WEBPACK_IMPORTED_MODULE_0__.default();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasDisplay);

/***/ }),

/***/ "./src/scripts/nav_util.js":
/*!*********************************!*\
  !*** ./src/scripts/nav_util.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnToHome": () => (/* binding */ returnToHome),
/* harmony export */   "openColorMenu": () => (/* binding */ openColorMenu)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");

function returnToHome(bg) {
  var homeButton = document.getElementById('back-to-main');
  homeButton.addEventListener('click', function () {
    bg.closed = true;
    document.getElementById("welcome-modal").style.display = "block";
    document.getElementById('canvas-menu').style.display = "none";
  });
}
function openColorMenu(bg) {
  var colorButton = document.getElementById('select-colors');
  colorButton.addEventListener('click', function () {
    bg.active = false;
    document.getElementById("colors-modal").style.display = "block";
    document.getElementById('canvas-menu').style.display = "none";
    var colorSet = new Set(bg.colorList);
    var colorCheckBoxes = document.getElementsByClassName("color-check");
    var allButton = document.getElementById('all');
    allButton.addEventListener('change', function () {
      if (allButton.checked) {
        colorSet = new Set(Object.keys(_utils__WEBPACK_IMPORTED_MODULE_0__.COLORS));
        bg.colorList = Object.keys(_utils__WEBPACK_IMPORTED_MODULE_0__.COLORS);
        noneButton.checked = false;

        for (var i = 0; i < colorCheckBoxes.length; i++) {
          colorCheckBoxes[i].checked = true;
        }
      }
    });
    var noneButton = document.getElementById('none');
    noneButton.addEventListener('change', function () {
      if (noneButton.checked) {
        colorSet.clear();
        bg.colorList = [];
        allButton.checked = false;

        for (var i = 0; i < colorCheckBoxes.length; i++) {
          colorCheckBoxes[i].checked = false;
        }
      }
    });

    for (var i = 0; i < colorCheckBoxes.length; i++) {
      colorCheckBoxes[i].addEventListener('change', function () {
        if (this.checked) {
          noneButton.checked = false;
          colorSet.add(this.value);
          bg.colorList = Array.from(colorSet);
        } else {
          allButton.checked = false;
          colorSet["delete"](this.value);
          bg.colorList = Array.from(colorSet);
        }
      });
    }

    document.getElementById('close-color-modal').addEventListener('click', function () {
      document.getElementById("colors-modal").style.display = "none";
      document.getElementById("canvas-menu").style.display = "flex";
      bg.active = true;
    });
  });
}

/***/ }),

/***/ "./src/scripts/projectiles/chrysanthemum.js":
/*!**************************************************!*\
  !*** ./src/scripts/projectiles/chrysanthemum.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Chrysanthemum = /*#__PURE__*/function () {
  function Chrysanthemum(props) {
    var _this = this;

    _classCallCheck(this, Chrysanthemum);

    this.origin = props.pos;
    this.pos = props.pos;
    this.grav = props.vel / 10;
    this.acc = 31 / 32;
    this.color = props.color;
    this.radius = props.radius || 0.5;
    this.time = 0;
    this.particles = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(6) + 18).forEach(function (velVec, i) {
      _this.particles[i] = {
        vel: velVec,
        pos: _this.pos
      };
    });
    this.middleLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(4) + 14).forEach(function (velVec, i) {
      _this.middleLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 2 / 3),
        pos: _this.pos
      };
    });
    this.innerLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(4) + 8).forEach(function (velVec, i) {
      _this.innerLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 1 / 3),
        pos: _this.pos
      };
    });
  }

  _createClass(Chrysanthemum, [{
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      var particle;
      [this.particles, this.middleLayer, this.innerLayer].forEach(function (layer) {
        Object.keys(layer).forEach(function (i) {
          particle = layer["".concat(i)];
          ctx.strokeStyle = _this2.color;
          ctx.beginPath();
          ctx.moveTo(_this2.origin[0], _this2.origin[1]);
          ctx.lineTo(particle.pos[0], particle.pos[1]);
          ctx.stroke();
        });
      });
    }
  }, {
    key: "move",
    value: function move() {
      var _this3 = this;

      var particle;
      [this.particles, this.middleLayer, this.innerLayer].forEach(function (layer) {
        Object.keys(layer).forEach(function (i) {
          particle = layer["".concat(i)];
          particle.pos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addVectors)(particle.pos, particle.vel);
          particle.vel = particle.vel.map(function (v) {
            return v * _this3.acc;
          });
          particle.pos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addVectors)(particle.pos, [0, _this3.grav]);
        });
      });
      this.origin = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addVectors)(this.origin, [0, this.grav]);
      this.time = this.time + _utils__WEBPACK_IMPORTED_MODULE_0__.FPS;
    }
  }]);

  return Chrysanthemum;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chrysanthemum);

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
    this.grav = props.vel / 10;
    this.color = props.color;
    this.radius = props.radius || 0.5;
    this.time = props.time || 0;
    this.particles = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(6) + 18).forEach(function (velVec, i) {
      _this.particles[i] = {
        vel: velVec,
        pos: _this.pos
      };
    });
    this.outsideLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(4) + 12).forEach(function (velVec, i) {
      _this.outsideLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 3 / 4),
        pos: _this.pos
      };
    });
    this.middleLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(3) + 9).forEach(function (velVec, i) {
      _this.middleLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 1 / 2),
        pos: _this.pos
      };
    });
    this.innerLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(2) + 4).forEach(function (velVec, i) {
      _this.innerLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 0.25),
        pos: _this.pos
      };
    });
  }

  _createClass(Peony, [{
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      var particle;
      [this.particles, this.outsideLayer, this.middleLayer, this.innerLayer].forEach(function (layer) {
        Object.keys(layer).forEach(function (i) {
          particle = layer["".concat(i)];
          ctx.fillStyle = _this2.color;
          ctx.beginPath();
          ctx.arc(particle.pos[0], particle.pos[1], _this2.radius, 0, 2 * Math.PI);
          ctx.fill();
        });
      });
    }
  }, {
    key: "move",
    value: function move() {
      var _this3 = this;

      var particle;
      [this.particles, this.outsideLayer, this.middleLayer, this.innerLayer].forEach(function (layer) {
        Object.keys(layer).forEach(function (i) {
          particle = layer["".concat(i)];
          particle.pos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addVectors)(particle.pos, particle.vel);
          particle.vel = particle.vel.map(function (v) {
            return v * 31 / 32;
          });
          particle.pos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addVectors)(particle.pos, [0, _this3.vel / 10]);
        });
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
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
        ctx.arc(smoke[0], smoke[1], _this.radius / _this.trailLength, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
  }, {
    key: "move",
    value: function move() {
      if (this.time % _utils__WEBPACK_IMPORTED_MODULE_0__.FPS * 2) {
        this.prevPos.push(this.pos);

        if (this.prevPos.length > this.trailLength) {
          this.smokePos.push(this.prevPos.shift());
          if (this.smokePos.length > this.smokeLength) this.smokePos.shift();
        }
      }

      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      this.vel[1] = this.vel[1] + this.acc;
      this.acc = Math.min(this.acc + .0005, this.gravity);
      this.time = this.time + _utils__WEBPACK_IMPORTED_MODULE_0__.FPS;
    }
  }]);

  return Projectile;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projectile);

/***/ }),

/***/ "./src/scripts/solid_color/solid_color_canvas.js":
/*!*******************************************************!*\
  !*** ./src/scripts/solid_color/solid_color_canvas.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SolidCanvas)
/* harmony export */ });
/* harmony import */ var _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/projectile */ "./src/scripts/projectiles/projectile.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
/* harmony import */ var _nav_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav_util */ "./src/scripts/nav_util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SolidCanvas = /*#__PURE__*/function () {
  function SolidCanvas(color) {
    _classCallCheck(this, SolidCanvas);

    this.background = 'solid-color-canvas';
    this.color = color;
    this.width = 0.9 * window.innerWidth;
    this.height = Math.min(0.9 * window.innerWidth * 0.5625, 0.9 * window.innerHeight);
    this.activeFireworks = [];
    this.removeFireworks = [];
    this.newfireworks = [];
    this.fac3d = 1;
    this.time = 600;
    this.colorList = _utils__WEBPACK_IMPORTED_MODULE_1__.establishColorList();
    this.active = true;
    this.closed = false;
  }

  _createClass(SolidCanvas, [{
    key: "activate",
    value: function activate(ctx) {
      this.active = true;
      this.renderCanvas(ctx);
      this.launchFireworks(ctx);
      this.addEventListeners(ctx);
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.rect(0, 0, this.width, this.height);
      ctx.fill();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(ctx) {
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_2__.returnToHome)(this);
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_2__.openColorMenu)(this, ctx);
    }
  }, {
    key: "launchFireworks",
    value: function launchFireworks() {
      var _this = this;

      var _ref = [this.width, this.height],
          w = _ref[0],
          h = _ref[1];
      var launching = setInterval(function () {
        if (_this.activeFireworks.length < 25 && _this.active && _this.colorList.length > 0) {
          ///Bottom Left
          setTimeout(function () {
            var pw = w * _utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5),
                ph = h * (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.45) + 0.45);

            _this.activeFireworks.push(new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5 * w) / w - 0.25, -ph / (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(50) + 150)],
              acc: -.015,
              color: _utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor(_this.colorList),
              radius: ph / 200
            }));
          }, _utils__WEBPACK_IMPORTED_MODULE_1__.rand(_this.time)); //Bottom Right

          setTimeout(function () {
            var pw = w * (0.5 + _utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5)),
                ph = h * (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.25) + 0.75);

            _this.activeFireworks.push(new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5 * w) / w - 0.25, -h / 200],
              acc: -0.01,
              color: _utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor(_this.colorList),
              radius: ph / 200
            }));
          }, _utils__WEBPACK_IMPORTED_MODULE_1__.rand(_this.time));
        }

        ;
        if (_this.closed) _utils__WEBPACK_IMPORTED_MODULE_1__.freeze(launching);
      }, this.time);
    }
  }, {
    key: "renderCanvas",
    value: function renderCanvas(ctx) {
      var _this2 = this;

      var renderFireworks = setInterval(function () {
        if (_this2.active) {
          _this2.drawBackground(ctx);

          _this2.activeFireworks.forEach(function (firework, i) {
            firework.draw(ctx);
            firework.move();

            switch (firework.getName()) {
              case 'Projectile':
                if (firework.vel[1] > 0.15) {
                  _this2.fac3d = firework.pos[1] / 50;
                  _this2.activeFireworks[i] = _utils__WEBPACK_IMPORTED_MODULE_1__.randomFirework(firework, _this2.fac3d);
                }

                break;

              case 'Peony':
                if (firework.time > 550) {
                  _this2.removeFireworks.push(i);
                }

              case 'Chrysanthemum':
                if (firework.time > 600) {
                  _this2.removeFireworks.push(i);
                }

                break;

              default:
                break;
            }
          });
        }

        _this2.removeFireworks.forEach(function (idx) {
          delete _this2.activeFireworks[idx];
        });

        _this2.removeFireworks = [];
        _this2.activeFireworks = _this2.activeFireworks.cleanArray();
        if (_this2.closed) _utils__WEBPACK_IMPORTED_MODULE_1__.freeze(renderFireworks);
      }, _utils__WEBPACK_IMPORTED_MODULE_1__.FPS);
      var settingsButtons = document.getElementsByClassName('open-modal');
      Object.values(settingsButtons).forEach(function (button) {
        button.addEventListener('click', function (e) {
          _this2.active = false;
        });
      });
    }
  }]);

  return SolidCanvas;
}();



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
/* harmony export */   "addVectors": () => (/* binding */ addVectors),
/* harmony export */   "multiplyVector": () => (/* binding */ multiplyVector),
/* harmony export */   "subVectors": () => (/* binding */ subVectors),
/* harmony export */   "randomFirework": () => (/* binding */ randomFirework),
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "establishColorList": () => (/* binding */ establishColorList),
/* harmony export */   "selectRandomColor": () => (/* binding */ selectRandomColor),
/* harmony export */   "FPS": () => (/* binding */ FPS),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "inherits": () => (/* binding */ inherits),
/* harmony export */   "freeze": () => (/* binding */ freeze)
/* harmony export */ });
/* harmony import */ var _projectiles_peony__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectiles/peony */ "./src/scripts/projectiles/peony.js");
/* harmony import */ var _projectiles_chrysanthemum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectiles/chrysanthemum */ "./src/scripts/projectiles/chrysanthemum.js");


function randInt(num) {
  return Math.floor(Math.random() * num);
}
function rand() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return Math.random() * num;
}
function addVectors(vec1, vec2) {
  return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
}
function multiplyVector(vec, fac) {
  return [vec[0] * fac, vec[1] * fac];
} //Will create an array of evenly distrubuted subvectors.  length: num, velocity: v

function subVectors(v, num) {
  var angle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var vecs = [];
  var newVec;

  for (var i = 0; i < num; i++) {
    newVec = [0, 0];
    newVec[0] = v * Math.cos(2 * Math.PI * i / num + angle);
    newVec[1] = v * Math.sin(2 * Math.PI * i / num + angle);
    vecs.push(newVec);
  }

  return vecs;
}
function randomFirework(projectile, fac3d) {
  var choice = randInt(2); // choice = 0

  switch (choice) {
    case 0:
      return new _projectiles_peony__WEBPACK_IMPORTED_MODULE_0__.default({
        pos: projectile.pos,
        vel: (rand(0.5) + 0.5) * fac3d,
        color: projectile.color,
        radius: projectile.radius * 0.4 * fac3d
      });

    case 1:
      return new _projectiles_chrysanthemum__WEBPACK_IMPORTED_MODULE_1__.default({
        pos: projectile.pos,
        vel: (rand(0.5) + 0.5) * fac3d,
        color: projectile.color,
        radius: projectile.radius * fac3d
      });

    default:
      break;
  }
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

var COLORS = {
  blue: ['#3340DB', '#504DF4', '#539DB3', '#39657E'],
  pink: ['#DE5BF8', '#FC7F81', '#ff007f', '#ff1493'],
  yellow: ['#ffff00', '#e2bb2b', '#b69835'],
  green: ['#6e9b81', '#2b583d', '#a0c0ad', '#adff2f'],
  red: ['#C63347', '#FA5348', '#F75781', '#C11E4B'],
  purple: ['#A76BFE', '#792BB2', '#E365E4'],
  orange: ['#F28E63', '#F9AE9B', '#B74F2B', '#9c805b', '#956548'],
  white: ['#C0C0C0', '#FFFAFA', '#FFFAFA']
};
function establishColorList() {
  return Object.keys(COLORS);
}
function selectRandomColor(colors) {
  var colorKey = colors[randInt(colors.length)];
  return COLORS[colorKey][randInt(COLORS[colorKey].length)];
}
var FPS = 1000 / 180; // Scale the length of a vector by the given amount.

function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}
;
function inherits(ChildClass, BaseClass) {
  ChildClass.prototype = Object.create(BaseClass.prototype);
  ChildClass.prototype.constructor = ChildClass;
}
;
function freeze(interval) {
  clearInterval(interval);
}

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
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/utils */ "./src/scripts/utils.js");



document.addEventListener("DOMContentLoaded", function () {
  //Close Welcome Modal and fill out Canvas with background of choice
  var canvasButtons = document.getElementsByClassName('close-modal');
  Object.values(canvasButtons).forEach(function (button) {
    button.addEventListener('click', function (e) {
      var color = document.getElementById('solidBackgroundColor').value;
      document.getElementById("welcome-modal").style.display = "none";
      document.getElementById("canvas-menu").style.display = "flex";
      (0,_scripts_canvas_display__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.id, color);
    });
  }); // Add event listener for `click` events.

  var cv = document.querySelector('canvas');
  cv.addEventListener('click', function (event) {
    var context = this.getContext('2d');
    var x = this.offsetLeft + this.clientLeft;
    var y = this.offsetTop + this.clientTop; // console.log(`x:${(event.pageX-x)/this.width}  y:${(event.pageY-y)/this.height}`)
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map