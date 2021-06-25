import "./styles/index.scss";
import CanvasDisplay from './scripts/canvas_display'

document.addEventListener("DOMContentLoaded", function() {      
    //Close Welcome Modal and fill out Canvas with background of choice
    // document.getElementById("close-modal").addEventListener('click', function() {        
    //     document.getElementById("welcome-modal").style.display="none";
        let canvasEl = CanvasDisplay('bay-area-canvas')          
    // })    

    // Add event listener for `click` events.
    let cv = document.querySelector('canvas')
    cv.addEventListener('click', function(event) {
        let context = this.getContext('2d')
        let x = this.offsetLeft + this.clientLeft
        let y = this.offsetTop + this.clientTop
        console.log(`x:${(event.pageX-x)/this.width}  y:${(event.pageY-y)/this.height}`)
    })



    






});

