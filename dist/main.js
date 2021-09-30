/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/animation_object.js":
/*!*****************************************!*\
  !*** ./src/scripts/animation_object.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectiles/projectile */ "./src/scripts/projectiles/projectile.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");
/* harmony import */ var _firework_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firework_utils */ "./src/scripts/firework_utils.js");
/* harmony import */ var _nav_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav_util */ "./src/scripts/nav_util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Animation = /*#__PURE__*/function () {
  function Animation(canvas) {
    _classCallCheck(this, Animation);

    this.canvas = canvas;
    this.colorList = _utils__WEBPACK_IMPORTED_MODULE_1__.establishColorList();
    this.active = true;
    this.launching = true;
    this.first = null;
    this.last = null;
    this.clearing = true;
    this.trailLength = 4; //2

    this.smokeLength = 16; //16
  }

  _createClass(Animation, [{
    key: "activate",
    value: function activate() {
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_3__.resetColorMenu)();
      this.fireworkOnClick();
      this.launchFireworks();
      this.reactivate();
    }
  }, {
    key: "reactivate",
    value: function reactivate() {
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_3__.addHomeListener)(this);
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_3__.addColorListener)(this);
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_3__.addStopAndPauseListeners)(this);
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_3__.addPersistListener)(this);
      (0,_nav_util__WEBPACK_IMPORTED_MODULE_3__.addResetListener)(this);
    }
  }, {
    key: "fireworkOnClick",
    value: function fireworkOnClick() {
      var that = this;
      var bounds = that.canvas.getBoundingClientRect();
      this.canvas.addEventListener('click', launch);

      function launch(e) {
        var w = e.pageX - bounds.left,
            h = e.pageY - bounds.top;
        var clickFW = new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
          pos: [w, h],
          vel: [_utils__WEBPACK_IMPORTED_MODULE_1__.rand(.8) - 0.4, h * that.fac3d * that.vel * (_utils__WEBPACK_IMPORTED_MODULE_1__.rand(0.5) + 0.5)],
          acc: that.fac3d * that.acc,
          grav: that.fac3d * that.grav,
          rad: that.fac3d * h * that.rad,
          color: _utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor(that.colorList),
          trailLength: that.trailLength,
          smokeLength: that.smokeLength
        });
        !that.first ? that.first = clickFW : _utils__WEBPACK_IMPORTED_MODULE_1__.joinNodes(that.last, clickFW);
        that.last = clickFW;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ctx = this.canvas.getContext('2d');

      if (this.active && !this.closed) {
        if (this.clearing) ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var firework = this.first;

        while (firework) {
          firework.draw(ctx);
          firework.move();

          switch (firework.getName()) {
            case 'Projectile':
              if (firework.vel[1] > 0.2) {
                var newFW = (0,_firework_utils__WEBPACK_IMPORTED_MODULE_2__.randomFirework)(firework, this.fac3d);
                if (this.first === firework) this.first = newFW;
                _utils__WEBPACK_IMPORTED_MODULE_1__.replaceNode(firework, newFW);
              }

              break;

            case 'Peony':
              if (firework.time > 75) {
                if (this.first === firework) this.first = firework.next;
                _utils__WEBPACK_IMPORTED_MODULE_1__.removeNode(firework);
              }

              break;

            case 'Chrysanthemum':
              if (firework.time > 75) {
                if (this.first === firework) this.first = firework.next;
                _utils__WEBPACK_IMPORTED_MODULE_1__.removeNode(firework);
              }

            default:
              break;
          }

          firework = firework.next;
        }

        ;
        window.requestAnimationFrame(this.render.bind(this));
      }
    }
  }]);

  return Animation;
}();



/***/ }),

/***/ "./src/scripts/bay_area/bay_animation.js":
/*!***********************************************!*\
  !*** ./src/scripts/bay_area/bay_animation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BayAnimation)
/* harmony export */ });
/* harmony import */ var _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/projectile */ "./src/scripts/projectiles/projectile.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
/* harmony import */ var _animation_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation_object */ "./src/scripts/animation_object.js");
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





var BayAnimation = /*#__PURE__*/function (_Animation) {
  _inherits(BayAnimation, _Animation);

  var _super = _createSuper(BayAnimation);

  function BayAnimation(canvas) {
    var _this;

    _classCallCheck(this, BayAnimation);

    _this = _super.call(this, canvas);
    _this.time = 600;
    _this.fac3d = .0025;
    _this.rad = 2;
    _this.vel = -3;
    _this.acc = -12;
    _this.grav = 2;
    return _this;
  }

  _createClass(BayAnimation, [{
    key: "launchFireworks",
    value: function launchFireworks() {
      var _this2 = this;

      this.launching = true;
      this.active = true;
      var _ref = [this.canvas.width, this.canvas.height],
          w = _ref[0],
          h = _ref[1];
      var launchingInterval = setInterval(function () {
        if (_this2.active && _this2.colorList.length > 0) {
          ///Bottom Left
          setTimeout(function () {
            var pw = w * (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5),
                ph = h * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.36) + 0.44); // 0.4 - 0.8

            var newFW = new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(.8) - 0.4, ph * _this2.fac3d * _this2.vel],
              acc: _this2.fac3d * _this2.acc,
              grav: _this2.fac3d * _this2.grav,
              rad: _this2.fac3d * ph * _this2.rad,
              color: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor)(_this2.colorList),
              trailLength: _this2.trailLength,
              smokeLength: _this2.smokeLength
            });
            !_this2.first ? _this2.first = newFW : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.joinNodes)(_this2.last, newFW);
            _this2.last = newFW;
          }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(_this2.time)); //Bottom Right

          setTimeout(function () {
            var pw = w * (0.5 + (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5)),
                ph = h * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.36) + 0.4); // 0.4 - 0.8

            var newFW = new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(.8) - 0.4, ph * _this2.fac3d * _this2.vel],
              acc: _this2.fac3d * _this2.acc,
              grav: _this2.fac3d * _this2.grav,
              rad: _this2.fac3d * ph * _this2.rad,
              color: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor)(_this2.colorList),
              trailLength: _this2.trailLength,
              smokeLength: _this2.smokeLength
            });
            !_this2.first ? _this2.first = newFW : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.joinNodes)(_this2.last, newFW);
            _this2.last = newFW;
          }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(_this2.time)); //Top Left

          setTimeout(function () {
            var pw = w * (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5),
                ph = h * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.12) + 0.23);
            var newFW = new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(.8) - 0.4, ph * _this2.fac3d * _this2.vel],
              acc: _this2.fac3d * _this2.acc,
              grav: _this2.fac3d * _this2.grav,
              rad: _this2.fac3d * ph * _this2.rad,
              color: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor)(_this2.colorList),
              trailLength: _this2.trailLength,
              smokeLength: _this2.smokeLength
            });
            !_this2.first ? _this2.first = newFW : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.joinNodes)(_this2.last, newFW);
            _this2.last = newFW;
          }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(_this2.time)); //Top Right

          setTimeout(function () {
            var pw = w * (0.5 + (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5)),
                ph = h * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.075) + 0.275);
            var newFW = new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(.8) - 0.4, ph * _this2.fac3d * _this2.vel],
              acc: _this2.fac3d * _this2.acc,
              grav: _this2.fac3d * _this2.grav,
              rad: _this2.fac3d * ph * _this2.rad,
              color: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor)(_this2.colorList),
              trailLength: _this2.trailLength,
              smokeLength: _this2.smokeLength
            });
            !_this2.first ? _this2.first = newFW : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.joinNodes)(_this2.last, newFW);
            _this2.last = newFW;
          }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(_this2.time));
        }

        ;
        if (!_this2.launching) clearInterval(launchingInterval);
      }, this.time);
    }
  }]);

  return BayAnimation;
}(_animation_object__WEBPACK_IMPORTED_MODULE_2__.default);



/***/ }),

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

/***/ "./src/scripts/canvas_display.js":
/*!***************************************!*\
  !*** ./src/scripts/canvas_display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bay_area_bay_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bay_area/bay_animation */ "./src/scripts/bay_area/bay_animation.js");
/* harmony import */ var _bay_area_bay_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bay_area/bay_background */ "./src/scripts/bay_area/bay_background.js");
/* harmony import */ var _solid_color_solid_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solid_color/solid_animation */ "./src/scripts/solid_color/solid_animation.js");
/* harmony import */ var _solid_color_solid_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solid_color/solid_background */ "./src/scripts/solid_color/solid_background.js");





function CanvasDisplay(background) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var w = Math.min(0.7 * window.innerWidth, 1200);
  var h = Math.min(0.7 * window.innerWidth * 2 / 3, 0.7 * window.innerHeight);
  var canvas = document.getElementById('animation-canvas');
  canvas.width = w;
  canvas.height = h;
  var bg = document.getElementById('background-canvas');
  bg.width = w;
  bg.height = h;
  var bgCtx = bg.getContext('2d');
  var animation;

  switch (background) {
    case 'bay-area-canvas':
      (0,_bay_area_bay_background__WEBPACK_IMPORTED_MODULE_1__.drawBayAreaBackground)(bgCtx, w, h);
      animation = new _bay_area_bay_animation__WEBPACK_IMPORTED_MODULE_0__.default(canvas);
      animation.activate();
      break;

    case 'solid-color-canvas':
      (0,_solid_color_solid_background__WEBPACK_IMPORTED_MODULE_3__.default)(bgCtx, w, h, color);
      animation = new _solid_color_solid_animation__WEBPACK_IMPORTED_MODULE_2__.default(canvas);
      animation.activate();
      break;

    default:
      break;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasDisplay);

/***/ }),

/***/ "./src/scripts/firework_utils.js":
/*!***************************************!*\
  !*** ./src/scripts/firework_utils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomFirework": () => (/* binding */ randomFirework)
/* harmony export */ });
/* harmony import */ var _projectiles_peony__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectiles/peony */ "./src/scripts/projectiles/peony.js");
/* harmony import */ var _projectiles_chrysanthemum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectiles/chrysanthemum */ "./src/scripts/projectiles/chrysanthemum.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");


 //returns the type of object as a string [].getName -> 'Array'

Object.prototype.getName = function () {
  var funcNameRegex = /function (.{1,})\(/;
  var results = funcNameRegex.exec(this.constructor.toString());
  return results && results.length > 1 ? results[1] : "";
};

function randomFirework(projectile, fac3d) {
  var choice = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.randInt)(2); // choice = 0

  switch (choice) {
    case 0:
      return new _projectiles_peony__WEBPACK_IMPORTED_MODULE_0__.default({
        pos: projectile.pos,
        vel: ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(0.75) + 1.25) * fac3d * projectile.pos[1],
        color: projectile.color,
        radius: projectile.rad * 0.5
      });

    case 1:
      return new _projectiles_chrysanthemum__WEBPACK_IMPORTED_MODULE_1__.default({
        pos: projectile.pos,
        vel: ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.rand)(0.75) + 1.25) * fac3d * projectile.pos[1],
        color: projectile.color,
        radius: Math.max(0, projectile.rad * fac3d)
      });

    default:
      break;
  }
}

/***/ }),

/***/ "./src/scripts/nav_util.js":
/*!*********************************!*\
  !*** ./src/scripts/nav_util.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHomeListener": () => (/* binding */ addHomeListener),
/* harmony export */   "addColorListener": () => (/* binding */ addColorListener),
/* harmony export */   "resetColorMenu": () => (/* binding */ resetColorMenu),
/* harmony export */   "addStopAndPauseListeners": () => (/* binding */ addStopAndPauseListeners),
/* harmony export */   "addPersistListener": () => (/* binding */ addPersistListener),
/* harmony export */   "addResetListener": () => (/* binding */ addResetListener)
/* harmony export */ });
/* harmony import */ var _navigation_color_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/color_menu */ "./src/scripts/navigation/color_menu.js");
/* harmony import */ var _navigation_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/home */ "./src/scripts/navigation/home.js");
/* harmony import */ var _navigation_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/persist */ "./src/scripts/navigation/persist.js");
/* harmony import */ var _navigation_start_stop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/start_stop */ "./src/scripts/navigation/start_stop.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function welcomeModal() {
  return document.getElementById("welcome-modal");
}

function colorsModal() {
  return document.getElementById("colors-modal");
}

function canvasMenu() {
  return document.getElementById('canvas-menu');
}

function homeButton() {
  return document.getElementById('open-welcome-modal');
}

function colorButton() {
  return document.getElementById('open-color-modal');
}

function pauseButton() {
  return document.getElementById('pause');
}

function stopButton() {
  return document.getElementById('stop');
}

function startButton() {
  return document.getElementById('start');
}

function persistButton() {
  return document.getElementById('persisting-effects');
}

function resetButton() {
  return document.getElementById('reset-canvas');
} // _____HOME MENU_________________________________________________________


function addHomeListener(animation) {
  (0,_navigation_home__WEBPACK_IMPORTED_MODULE_1__.homeButtonListener)(animation, homeButton(), welcomeModal(), canvasMenu());
} // _____COLOR MENU_________________________________________________________

function addColorListener(animation) {
  (0,_navigation_color_menu__WEBPACK_IMPORTED_MODULE_0__.colorButtonListener)(animation, colorButton(), colorsModal(), canvasMenu());
}
function resetColorMenu() {
  document.getElementById('all').checked = true;
  document.getElementById('none').checked = false;
  var colorBoxes = document.getElementsByClassName("color-check");

  var _iterator = _createForOfIteratorHelper(colorBoxes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var color = _step.value;
      color.checked = true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // _____ Stop / Start _________________________________________________________

function addStopAndPauseListeners(animation) {
  (0,_navigation_start_stop__WEBPACK_IMPORTED_MODULE_3__.StopAndPauseButtonListeners)(animation, startButton(), pauseButton(), stopButton());
} // _____ Persisting Fireworks _________________________________________________________

function addPersistListener(animation) {
  (0,_navigation_persist__WEBPACK_IMPORTED_MODULE_2__.persistButtonListener)(animation, persistButton());
} // _____ Reset Canvas _________________________________________________________

function addResetListener(animation) {
  resetButton().addEventListener('click', resetBackgroundCanvas);

  function resetBackgroundCanvas() {
    var canvas = animation.canvas;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/***/ }),

/***/ "./src/scripts/navigation/color_menu.js":
/*!**********************************************!*\
  !*** ./src/scripts/navigation/color_menu.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorButtonListener": () => (/* binding */ colorButtonListener)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function colorButtonListener(animation, colorButton, colorsModal) {
  colorButton.addEventListener('click', openColorMenu);

  function openColorMenu() {
    // animation.launching = false
    animation.active = false;
    colorsModal.style.display = "block"; // const newCanvasMenu = canvasMenu.cloneNode(true);
    // canvasMenu.parentNode.replaceChild(newCanvasMenu, canvasMenu);

    var colorSet = new Set(animation.colorList);
    var colorCheckBoxes = document.getElementsByClassName("color-check");
    var allButton = document.getElementById('all');
    allButton.addEventListener('change', checkAllColors);

    function checkAllColors() {
      if (allButton.checked) {
        colorSet = new Set(Object.keys(_utils__WEBPACK_IMPORTED_MODULE_0__.COLORS));
        noneButton.checked = false;

        for (var i = 0; i < colorCheckBoxes.length; i++) {
          colorCheckBoxes[i].checked = true;
        }
      }
    }

    var noneButton = document.getElementById('none');
    noneButton.addEventListener('change', checkNoneColors);

    function checkNoneColors() {
      if (noneButton.checked) {
        colorSet.clear();
        animation.colorList = [];
        allButton.checked = false;

        for (var i = 0; i < colorCheckBoxes.length; i++) {
          colorCheckBoxes[i].checked = false;
        }
      }
    }

    var _iterator = _createForOfIteratorHelper(colorCheckBoxes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var colorBox = _step.value;
        colorBox.addEventListener('change', checkColor);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    function checkColor() {
      if (this.checked) {
        noneButton.checked = false;
        colorSet.add(this.value);
      } else {
        allButton.checked = false;
        colorSet["delete"](this.value);
      }
    }

    ;
    var closeColorsButton = document.getElementById('close-color-modal');
    closeColorsButton.addEventListener('click', closeColorMenu);

    function closeColorMenu() {
      allButton.removeEventListener('change', checkAllColors);
      noneButton.removeEventListener('change', checkNoneColors);
      closeColorsButton.removeEventListener('click', closeColorMenu);

      var _iterator2 = _createForOfIteratorHelper(colorCheckBoxes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var colorBox = _step2.value;
          colorBox.removeEventListener('change', checkColor);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      colorsModal.style.display = "none";
      animation.colorList = Array.from(colorSet);
      animation.active = true; // animation.launching = true;
      // animation.launcheFireworks()

      animation.render();
    }
  }
}

/***/ }),

/***/ "./src/scripts/navigation/home.js":
/*!****************************************!*\
  !*** ./src/scripts/navigation/home.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeButtonListener": () => (/* binding */ homeButtonListener)
/* harmony export */ });
function homeButtonListener(animation, homeButton, welcomeModal, canvasMenu) {
  homeButton.addEventListener('click', returnToHome);

  function returnToHome() {
    animation.launching = false;
    welcomeModal.style.display = "block";
    var newCanvas = animation.canvas.cloneNode(true);
    animation.canvas.parentNode.replaceChild(newCanvas, animation.canvas);
    var newCanvasMenu = canvasMenu.cloneNode(true);
    canvasMenu.parentNode.replaceChild(newCanvasMenu, canvasMenu);
    canvasMenu.style.display = "none";
  }
} // homeButton.removeEventListener('click', returnToHome)
// colorButton.removeEventListener('click', openColorMenu)
// pauseButton.removeEventListener('click', clickPause)
// stopButton.removeEventListener('click', clickStop)
// startButton.removeEventListener('click', clickStart)
// startButton.removeEventListener('click', clickResume)

/***/ }),

/***/ "./src/scripts/navigation/persist.js":
/*!*******************************************!*\
  !*** ./src/scripts/navigation/persist.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistButtonListener": () => (/* binding */ persistButtonListener)
/* harmony export */ });
/* harmony import */ var _solid_color_solid_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../solid_color/solid_background */ "./src/scripts/solid_color/solid_background.js");

function persistButtonListener(animation, persistButton) {
  persistButton.addEventListener('click', togglePersistingFireworks);
  var persistIcon = document.getElementById('persisting');
  var _ref = [animation.trailLength, animation.smokeLength],
      trail = _ref[0],
      smoke = _ref[1];

  function togglePersistingFireworks() {
    if (animation.clearing) {
      animation.clearing = false;
      animation.trailLength = 0;
      animation.smokeLength = 0;
      persistIcon.style.color = '#E2BB2B';
    } else {
      var _ref2 = [trail, smoke];
      animation.trailLength = _ref2[0];
      animation.smokeLength = _ref2[1];
      animation.clearing = true;
      persistIcon.style.color = 'white';
    }
  }
}

/***/ }),

/***/ "./src/scripts/navigation/start_stop.js":
/*!**********************************************!*\
  !*** ./src/scripts/navigation/start_stop.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopAndPauseButtonListeners": () => (/* binding */ StopAndPauseButtonListeners)
/* harmony export */ });
function StopAndPauseButtonListeners(animation, startButton, pauseButton, stopButton) {
  startButton.style.display = "none";
  pauseButton.style.display = "block";
  stopButton.style.display = "block";
  pauseButton.addEventListener('click', clickPause);
  stopButton.addEventListener('click', clickStop);
  animation.render();

  function clickStop() {
    animation.launching = false;
    stopButton.removeEventListener('click', clickStop);
    pauseButton.removeEventListener('click', clickPause);
    stopButton.style.display = "none";
    pauseButton.style.display = "none";
    startButton.style.display = "block";
    startButton.addEventListener('click', clickStart);

    function clickStart() {
      startButton.removeEventListener('click', clickStart);
      animation.launchFireworks();
      StopAndPauseButtonListeners(animation, startButton, pauseButton, stopButton);
    }
  }

  function clickPause() {
    animation.active = false;
    pauseButton.removeEventListener('click', clickPause);
    stopButton.removeEventListener('click', clickStop);
    pauseButton.style.display = "none";
    stopButton.style.display = "none";
    startButton.style.display = "block";
    startButton.addEventListener('click', clickResume);

    function clickResume() {
      startButton.removeEventListener('click', clickResume);
      animation.active = true;
      StopAndPauseButtonListeners(animation, startButton, pauseButton, stopButton);
    }
  }
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
/* harmony import */ var _firework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firework */ "./src/scripts/projectiles/firework.js");
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




var Chrysanthemum = /*#__PURE__*/function (_Firework) {
  _inherits(Chrysanthemum, _Firework);

  var _super = _createSuper(Chrysanthemum);

  function Chrysanthemum(props) {
    var _this;

    _classCallCheck(this, Chrysanthemum);

    _this = _super.call(this, props);
    _this.radius = props.radius || 0.5;
    _this.origin = props.pos;
    _this.middleLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(4) + 14).forEach(function (velVec, i) {
      _this.middleLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 2 / 3),
        pos: _this.pos
      };
    });
    _this.innerLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(4) + 8).forEach(function (velVec, i) {
      _this.innerLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 1 / 3),
        pos: _this.pos
      };
    });
    return _this;
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
      this.time++;
    }
  }]);

  return Chrysanthemum;
}(_firework__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chrysanthemum);

/***/ }),

/***/ "./src/scripts/projectiles/firework.js":
/*!*********************************************!*\
  !*** ./src/scripts/projectiles/firework.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Firework = function Firework(props) {
  var _this = this;

  _classCallCheck(this, Firework);

  this.next = null;
  this.prev = null;
  this.pos = props.pos;
  this.vel = props.vel;
  this.acc = 31 / 32;
  this.grav = props.vel / 10;
  this.time = 0;
  this.color = props.color;
  this.particles = {};
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(6) + 18).forEach(function (velVec, i) {
    _this.particles[i] = {
      vel: velVec,
      pos: _this.pos
    };
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Firework);

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
/* harmony import */ var _firework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firework */ "./src/scripts/projectiles/firework.js");
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




var Peony = /*#__PURE__*/function (_Firework) {
  _inherits(Peony, _Firework);

  var _super = _createSuper(Peony);

  function Peony(props) {
    var _this;

    _classCallCheck(this, Peony);

    _this = _super.call(this, props);
    _this.radius = props.radius || 0.5;
    _this.outsideLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(4) + 12).forEach(function (velVec, i) {
      _this.outsideLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 3 / 4),
        pos: _this.pos
      };
    });
    _this.middleLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(3) + 9).forEach(function (velVec, i) {
      _this.middleLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 1 / 2),
        pos: _this.pos
      };
    });
    _this.innerLayer = {};
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.subVectors)(props.vel, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randInt)(2) + 4).forEach(function (velVec, i) {
      _this.innerLayer[i] = {
        vel: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.multiplyVector)(velVec, 0.25),
        pos: _this.pos
      };
    });
    return _this;
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
      this.time++;
    }
  }]);

  return Peony;
}(_firework__WEBPACK_IMPORTED_MODULE_1__.default);

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

    this.next = null;
    this.prev = null;
    this.pos = props.pos;
    this.vel = props.vel;
    this.acc = props.acc;
    this.grav = props.grav;
    this.rad = props.rad;
    this.color = props.color;
    this.trailFirst = null;
    this.trailLast = null;
    this.smokeFirst = null;
    this.smokeLast = null;
    this.trailLength = props.trailLength;
    this.smokeLength = props.smokeLength;
  }

  _createClass(Projectile, [{
    key: "draw",
    value: function draw(ctx) {
      //Smoke trail
      var smoke = this.smokeFirst;

      while (smoke) {
        smoke.count++;
        var _ref = [smoke.pos[0], smoke.pos[1]],
            x = _ref[0],
            y = _ref[1];
        var i = 0.5 * this.rad * (this.smokeLength - smoke.count) / this.smokeLength;
        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.arc(x, y, i, 0, 2 * Math.PI);
        ctx.fill();
        smoke = smoke.next;
      }

      ; //Spearhead of projectile

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2 * Math.PI);
      ctx.fill(); //Trail

      var trail = this.trailFirst;

      while (trail) {
        trail.count++;
        var _ref2 = [trail.pos[0], trail.pos[1]],
            _x = _ref2[0],
            _y = _ref2[1];

        var _i = this.rad * (0.5 + 0.5 * (this.trailLength - trail.count) / this.trailLength);

        ctx.beginPath();
        ctx.arc(_x, _y, _i, 0, 2 * Math.PI);
        ctx.fill();
        trail = trail.next;
      }
    }
  }, {
    key: "move",
    value: function move() {
      var newTrail = new _utils__WEBPACK_IMPORTED_MODULE_0__.Node([this.pos]);
      if (!this.trailFirst) this.trailFirst = newTrail;
      if (this.trailLast) this.trailLast.next = newTrail;
      this.trailLast = newTrail;
      var current = this.trailFirst;

      while (current) {
        if (current.count === this.trailLength) {
          this.trailFirst = current.next;
          current.count = 0;
          current.next = null;
          if (!this.smokeFirst) this.smokeFirst = current;
          if (this.smokeLast) this.smokeLast.next = current;
          this.smokeLast = current;
        }

        current = current.next;
      }

      current = this.smokeFirst;

      while (current) {
        if (current.count === this.smokeLength) {
          this.smokeFirst = current.next;
        }

        current = current.next;
      }

      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      this.vel[1] = this.vel[1] + this.acc;
      this.acc += this.grav;
    }
  }]);

  return Projectile;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projectile);

/***/ }),

/***/ "./src/scripts/solid_color/solid_animation.js":
/*!****************************************************!*\
  !*** ./src/scripts/solid_color/solid_animation.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SolidAnimation)
/* harmony export */ });
/* harmony import */ var _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectiles/projectile */ "./src/scripts/projectiles/projectile.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils.js");
/* harmony import */ var _animation_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation_object */ "./src/scripts/animation_object.js");
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





var SolidAnimation = /*#__PURE__*/function (_Animation) {
  _inherits(SolidAnimation, _Animation);

  var _super = _createSuper(SolidAnimation);

  function SolidAnimation(canvas) {
    var _this;

    _classCallCheck(this, SolidAnimation);

    _this = _super.call(this, canvas);
    _this.time = 500;
    _this.fac3d = .01;
    _this.rad = 1;
    _this.vel = -2;
    _this.acc = -5;
    _this.grav = 1;
    return _this;
  }

  _createClass(SolidAnimation, [{
    key: "launchFireworks",
    value: function launchFireworks() {
      var _this2 = this;

      this.launching = true;
      this.active = true;
      var _ref = [this.canvas.width, this.canvas.height],
          w = _ref[0],
          h = _ref[1];
      var launchingInterval = setInterval(function () {
        if (_this2.active && _this2.colorList.length > 0) {
          ///Bottom Left
          setTimeout(function () {
            var pw = w * (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5),
                ph = h * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.6) + 0.3);
            var newFW = new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(.8) - 0.4, ph * _this2.fac3d * _this2.vel * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5) + 0.5)],
              acc: _this2.fac3d * _this2.acc,
              grav: _this2.fac3d * _this2.grav,
              rad: _this2.fac3d * ph * _this2.rad,
              color: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor)(_this2.colorList),
              trailLength: _this2.trailLength,
              smokeLength: _this2.smokeLength
            });
            !_this2.first ? _this2.first = newFW : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.joinNodes)(_this2.last, newFW);
            _this2.last = newFW;
          }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(_this2.time)); //Bottom Right

          setTimeout(function () {
            var pw = w * (0.5 + (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5)),
                ph = h * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.6) + 0.3);
            var newFW = new _projectiles_projectile__WEBPACK_IMPORTED_MODULE_0__.default({
              pos: [pw, ph],
              vel: [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(.8) - 0.4, ph * _this2.fac3d * _this2.vel * ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(0.5) + 0.5)],
              acc: _this2.fac3d * _this2.acc,
              grav: _this2.fac3d * _this2.grav,
              rad: _this2.fac3d * ph * _this2.rad,
              color: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectRandomColor)(_this2.colorList),
              trailLength: _this2.trailLength,
              smokeLength: _this2.smokeLength
            });
            !_this2.first ? _this2.first = newFW : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.joinNodes)(_this2.last, newFW);
            _this2.last = newFW;
          }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.rand)(_this2.time));
        }

        ;
        if (!_this2.launching) clearInterval(launchingInterval);
      }, this.time);
    }
  }]);

  return SolidAnimation;
}(_animation_object__WEBPACK_IMPORTED_MODULE_2__.default);



/***/ }),

/***/ "./src/scripts/solid_color/solid_background.js":
/*!*****************************************************!*\
  !*** ./src/scripts/solid_color/solid_background.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawSolidBackground)
/* harmony export */ });
function drawSolidBackground(ctx, w, h, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.rect(0, 0, w, h);
  ctx.fill();
}

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
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "establishColorList": () => (/* binding */ establishColorList),
/* harmony export */   "selectRandomColor": () => (/* binding */ selectRandomColor),
/* harmony export */   "getInputValue": () => (/* binding */ getInputValue),
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "joinNodes": () => (/* binding */ joinNodes),
/* harmony export */   "replaceNode": () => (/* binding */ replaceNode),
/* harmony export */   "removeNode": () => (/* binding */ removeNode)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function randInt(num) {
  return Math.floor(Math.random() * num);
}
function rand() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return Math.random() * num;
} //__________________________________________________________________________
// vector manipulation functions

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
} // Scale the length of a vector by the given amount.

function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}
; //end_________________________________________________________________________

var COLORS = {
  blue: ['#3340DB', '#504DF4', '#539DB3', '#39657E'],
  pink: ['#DE5BF8', '#FC7F81', '#ff007f', '#ff1493'],
  yellow: ['#ffff00', '#e2bb2b', '#b69835'],
  green: ['#6e9b81', '#2b583d', 'green', '#adff2f'],
  red: ['#C63347', '#FA5348', '#F75781', '#C11E4B'],
  purple: ['#A76BFE', '#792BB2', '#E365E4'],
  orange: ['#F28E63', '#F9AE9B', '#B74F2B', '#9c805b', '#956548'],
  white: ['#C0C0C0', '#FFFAFA', '#FFFAFA'],
  black: ['black', '#696969']
}; //establishes and array with all colors

function establishColorList() {
  return Object.keys(COLORS);
}
function selectRandomColor(colors) {
  var colorKey = colors[randInt(colors.length)];
  var colorIdx = randInt(COLORS[colorKey].length);
  return COLORS[colorKey][colorIdx];
}
function getInputValue(str) {
  return parseFloat(document.getElementById(str).value);
} //______________________________________________________________
// Node manipulation for fireworks node list

var Node = function Node(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      pos = _ref2[0];

  _classCallCheck(this, Node);

  this.pos = pos;
  this.next = null;
  this.count = 0;
};
function joinNodes(node1, node2) {
  node1.next = node2;
  node2.prev = node1;
}
function replaceNode(oldNode, newNode) {
  var prev = oldNode.prev;
  var next = oldNode.next;
  if (prev) prev.next = newNode;
  newNode.prev = prev;
  if (next) next.prev = newNode;
  newNode.next = next;
}
function removeNode(node) {
  var prev = node.prev;
  var next = node.next;
  if (next) next.prev = prev;
  if (prev) prev.next = next;
} // end_________________________________________________________

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
  var color = document.getElementById('color-input');
  var colorOutput = document.getElementById('solid-color-canvas');
  colorOutput.innerHTML = ntc.name("".concat(color.value))[1];
  color.addEventListener("change", function () {
    colorOutput.innerHTML = ntc.name("".concat(color.value))[1];
  }); //Close Welcome Modal and fill out Canvas with background of choice

  var canvasButtons = document.getElementsByClassName('close-welcome-modal');
  Object.values(canvasButtons).forEach(function (button) {
    button.addEventListener('click', function (e) {
      document.getElementById("welcome-modal").style.display = "none";
      document.getElementById("canvas-menu").style.display = "flex";
      (0,_scripts_canvas_display__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.id, color.value);
    });
  }); // Add event listener for `click` events.
  // let cv = document.querySelector('canvas')
  // cv.addEventListener('click', function(event) {
  //     let x = this.offsetLeft
  //     let y = this.offsetTop
  //     console.log(`x:${(event.pageX)}  y:${event.pageY}`)
  // })
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map