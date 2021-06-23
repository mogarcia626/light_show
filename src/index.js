// import "./styles/index.scss";
// import canvasExample from "./scripts/canvas";
// import Square from "./scripts/square";
// import { DOMExample } from "./scripts/DOMExample";
// const currentStateObj = {
//     currentExample: null,
//     currentEventListeners: [],
// };
console.log('webpack is working')

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = innerWidth;
  const w = canvasEl.width
  canvasEl.height = innerWidth*0.5625;
  const h = canvasEl.height
  const ctx = canvasEl.getContext("2d");

  // sky gradient
  const skyGrd = ctx.createLinearGradient(0, 0.316*h, 0,0.05*h);
  skyGrd.addColorStop(0, '#775575');
  skyGrd.addColorStop(0.5, '#362E57');
  skyGrd.addColorStop(1, '#210F1F')
  ctx.fillStyle = skyGrd;
  ctx.fillRect(0, 0, w, 0.316*h);

  // ground gradient
  const groundGrd = ctx.createLinearGradient(0, 0.5*h, 0, h);
  groundGrd.addColorStop(0, '#210F1F');
  groundGrd.addColorStop(0.6, '#222222');
  groundGrd.addColorStop(0.9, 'black');
  ctx.fillStyle = groundGrd;
  ctx.fillRect(0, 0.5*h, w, h);

  // bay
  ctx.beginPath();
    ctx.moveTo(0, 0.33*h);
    ctx.lineTo(w,0.35*h);
    ctx.lineTo(w,0.4*h);
    ctx.lineTo(0,0.45*h);
  ctx.closePath();
  ctx.fillStyle = "#2B2348";
  ctx.fill();

  // SF hills
  ctx.beginPath();
    ctx.arc(0.169*w, 2.396*h, 1.24*w, 1.45*Math.PI, 1.52*Math.PI, false);
    ctx.lineTo(0.3*w, 0.19*h)
    ctx.lineTo(0.32*w, 0.2*h)
    ctx.lineTo(0.335*w, 0.2*h)
    ctx.lineTo(0.398*w, 0.237*h)
    ctx.arc(0.423*w, 0.381*h, .085*w, 1.41*Math.PI, 1.65*Math.PI, false);
    ctx.lineTo(0.519*w, 0.237*h)
    ctx.lineTo(0.55*w, 0.22*h)
    ctx.lineTo(0.56*w, 0.22*h)
    ctx.lineTo(0.581*w, 0.237*h)
    ctx.lineTo(0.69*w, 0.26*h)
    ctx.lineTo(0.75*w, 0.24*h)
    ctx.lineTo(0.8*w, 0.27*h)
    ctx.lineTo(0.85*w, 0.27*h)
    ctx.lineTo(0.9*w, 0.237*h)
    ctx.lineTo(0.95*w, 0.26*h)
    ctx.lineTo(w,0.3*h);
    ctx.lineTo(w,0.35*h);
    ctx.lineTo(0,0.33*h);
  ctx.closePath();
  ctx.fillStyle = "#0B0917";
  ctx.fill();

    // for (let x = 0; x < w; x+=w/50) {
    //     for (let y = 0; y < h; y+=w/50) {
    //         ctx.rect(x,y,w/500,w/500);
    //         ctx.fillStyle = "yellow";
    //         ctx.fill();
    //     }
    // }


});



// document.querySelector("#DOM-demo").addEventListener("click", startDOM);

// function startDOM() {
//     unregisterEventListeners();
//     clearDemo();
//     currentStateObj.currentExample = "DOMDEMO";
//     DOMExample();
// }

// function startCanvas() {
//     clearDemo();
//     unregisterEventListeners();
//     currentStateObj.currentExample = "CANVASDEMO";
//     const canvas = new canvasExample();
//     canvas.createCanvas();
//     const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];

//     let animating = true;

//     const animation = () => {
//         canvas.clearCanvas();
//         if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
//         squares.forEach((sq) => sq.drawSquare());
//         window.requestAnimationFrame(animation);
//         squares.forEach((sq) => {
//             if (sq.coords[0] + sq.coords[2] > window.innerWidth)
//                 sq.reverseAnimation();
//             if (sq.coords[0] < 0) sq.reverseAnimation();
//         });
//     };

//     window.requestAnimationFrame(animation);

//     window.addEventListener("keydown", handleKeyDown);
//     currentStateObj.currentEventListeners.push([
//         "window",
//         "keydown",
//         handleKeyDown,
//     ]);

//     window.addEventListener("mousedown", handleMouseDown);
//     currentStateObj.currentEventListeners.push([
//         "window",
//         "mousedown",
//         handleMouseDown,
//     ]);

//     function handleKeyDown(event) {
//         if (event.which === 32) {
//             event.preventDefault();
//             squares.forEach((sq) => sq.reverseAnimation());
//             canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//         }
//     }

//     function handleMouseDown(event) {
//         event.preventDefault();
//         squares.push(
//             new Square(
//                 canvas.ctx,
//                 canvas.coords.map((co) => co + 25),
//                 canvas.fillColor
//             )
//         );
//         // animating = !animating;
//     }
// }

// function unregisterEventListeners() {
//     while (currentStateObj.currentEventListeners.length) {
//         let [
//             selector,
//             event,
//             handler,
//         ] = currentStateObj.currentEventListeners.pop();
//         if (selector === "window") {
//             window.removeEventListener(event, handler);
//             console.log(handler);
//         } else {
//             document.querySelector(selector).removeEventListener(event, handler);
//         }
//     }
// }

// function clearDemo() {
//     if (currentStateObj.currentExample === "CANVASDEMO")
//         document.body.removeChild(document.querySelector("canvas"));
//     if (currentStateObj.currentExample === "DOMDEMO") {
//         [...document.querySelectorAll(".card")].forEach((elem) =>
//             document.body.removeChild(elem)
//         );
//     }
// }
