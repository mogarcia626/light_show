/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import \"./styles/index.scss\";\n// import canvasExample from \"./scripts/canvas\";\n// import Square from \"./scripts/square\";\n// import { DOMExample } from \"./scripts/DOMExample\";\n// const currentStateObj = {\n//     currentExample: null,\n//     currentEventListeners: [],\n// };\nconsole.log('webpack is working')\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"canvas\");\n  canvasEl.width = innerWidth;\n  const w = canvasEl.width\n  canvasEl.height = innerWidth*0.5625;\n  const h = canvasEl.height\n  const ctx = canvasEl.getContext(\"2d\");\n\n  // sky gradient\n  const skyGrd = ctx.createLinearGradient(0, 0.316*h, 0,0.05*h);\n  skyGrd.addColorStop(0, '#775575');\n  skyGrd.addColorStop(0.5, '#362E57');\n  skyGrd.addColorStop(1, '#210F1F')\n  ctx.fillStyle = skyGrd;\n  ctx.fillRect(0, 0, w, 0.316*h);\n\n  // ground gradient\n  const groundGrd = ctx.createLinearGradient(0, 0.5*h, 0, h);\n  groundGrd.addColorStop(0, '#210F1F');\n  groundGrd.addColorStop(0.6, '#222222');\n  groundGrd.addColorStop(0.9, 'black');\n  ctx.fillStyle = groundGrd;\n  ctx.fillRect(0, 0.5*h, w, h);\n\n  // bay\n  ctx.beginPath();\n    ctx.moveTo(0, 0.33*h);\n    ctx.lineTo(w,0.35*h);\n    ctx.lineTo(w,0.4*h);\n    ctx.lineTo(0,0.45*h);\n  ctx.closePath();\n  ctx.fillStyle = \"#2B2348\";\n  ctx.fill();\n\n  // SF hills\n  ctx.beginPath();\n    ctx.arc(0.169*w, 2.396*h, 1.24*w, 1.45*Math.PI, 1.52*Math.PI, false);\n    ctx.lineTo(0.3*w, 0.19*h)\n    ctx.lineTo(0.32*w, 0.2*h)\n    ctx.lineTo(0.335*w, 0.2*h)\n    ctx.lineTo(0.398*w, 0.237*h)\n    ctx.arc(0.423*w, 0.381*h, .085*w, 1.41*Math.PI, 1.65*Math.PI, false);\n    ctx.lineTo(0.519*w, 0.237*h)\n    ctx.lineTo(0.55*w, 0.22*h)\n    ctx.lineTo(0.56*w, 0.22*h)\n    ctx.lineTo(0.581*w, 0.237*h)\n    ctx.lineTo(0.69*w, 0.26*h)\n    ctx.lineTo(0.75*w, 0.24*h)\n    ctx.lineTo(0.8*w, 0.27*h)\n    ctx.lineTo(0.85*w, 0.27*h)\n    ctx.lineTo(0.9*w, 0.237*h)\n    ctx.lineTo(0.95*w, 0.26*h)\n    ctx.lineTo(w,0.3*h);\n    ctx.lineTo(w,0.35*h);\n    ctx.lineTo(0,0.33*h);\n  ctx.closePath();\n  ctx.fillStyle = \"#0B0917\";\n  ctx.fill();\n\n    // for (let x = 0; x < w; x+=w/50) {\n    //     for (let y = 0; y < h; y+=w/50) {\n    //         ctx.rect(x,y,w/500,w/500);\n    //         ctx.fillStyle = \"yellow\";\n    //         ctx.fill();\n    //     }\n    // }\n\n\n});\n\n\n\n// document.querySelector(\"#DOM-demo\").addEventListener(\"click\", startDOM);\n\n// function startDOM() {\n//     unregisterEventListeners();\n//     clearDemo();\n//     currentStateObj.currentExample = \"DOMDEMO\";\n//     DOMExample();\n// }\n\n// function startCanvas() {\n//     clearDemo();\n//     unregisterEventListeners();\n//     currentStateObj.currentExample = \"CANVASDEMO\";\n//     const canvas = new canvasExample();\n//     canvas.createCanvas();\n//     const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];\n\n//     let animating = true;\n\n//     const animation = () => {\n//         canvas.clearCanvas();\n//         if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));\n//         squares.forEach((sq) => sq.drawSquare());\n//         window.requestAnimationFrame(animation);\n//         squares.forEach((sq) => {\n//             if (sq.coords[0] + sq.coords[2] > window.innerWidth)\n//                 sq.reverseAnimation();\n//             if (sq.coords[0] < 0) sq.reverseAnimation();\n//         });\n//     };\n\n//     window.requestAnimationFrame(animation);\n\n//     window.addEventListener(\"keydown\", handleKeyDown);\n//     currentStateObj.currentEventListeners.push([\n//         \"window\",\n//         \"keydown\",\n//         handleKeyDown,\n//     ]);\n\n//     window.addEventListener(\"mousedown\", handleMouseDown);\n//     currentStateObj.currentEventListeners.push([\n//         \"window\",\n//         \"mousedown\",\n//         handleMouseDown,\n//     ]);\n\n//     function handleKeyDown(event) {\n//         if (event.which === 32) {\n//             event.preventDefault();\n//             squares.forEach((sq) => sq.reverseAnimation());\n//             canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);\n//         }\n//     }\n\n//     function handleMouseDown(event) {\n//         event.preventDefault();\n//         squares.push(\n//             new Square(\n//                 canvas.ctx,\n//                 canvas.coords.map((co) => co + 25),\n//                 canvas.fillColor\n//             )\n//         );\n//         // animating = !animating;\n//     }\n// }\n\n// function unregisterEventListeners() {\n//     while (currentStateObj.currentEventListeners.length) {\n//         let [\n//             selector,\n//             event,\n//             handler,\n//         ] = currentStateObj.currentEventListeners.pop();\n//         if (selector === \"window\") {\n//             window.removeEventListener(event, handler);\n//             console.log(handler);\n//         } else {\n//             document.querySelector(selector).removeEventListener(event, handler);\n//         }\n//     }\n// }\n\n// function clearDemo() {\n//     if (currentStateObj.currentExample === \"CANVASDEMO\")\n//         document.body.removeChild(document.querySelector(\"canvas\"));\n//     if (currentStateObj.currentExample === \"DOMDEMO\") {\n//         [...document.querySelectorAll(\".card\")].forEach((elem) =>\n//             document.body.removeChild(elem)\n//         );\n//     }\n// }\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;