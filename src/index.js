import "./styles/index.scss";
import CanvasDisplay from './scripts/canvas_display'
import { selectRandomColor } from './scripts/utils'


document.addEventListener("DOMContentLoaded", function() {     
    //Close Welcome Modal and fill out Canvas with background of choice
    const canvasButtons = document.getElementsByClassName('close-modal');

    Object.values(canvasButtons).forEach(button => {
        button.addEventListener('click', function(e) {
            const color = document.getElementById('solidBackgroundColor').value
            document.getElementById("welcome-modal").style.display="none";
                       
            let canvasEl = CanvasDisplay(e.target.id, color)          
        })            
    });

    // Add event listener for `click` events.
    let cv = document.querySelector('canvas')
    cv.addEventListener('click', function(event) {
        let context = this.getContext('2d')
        let x = this.offsetLeft + this.clientLeft
        let y = this.offsetTop + this.clientTop
        // console.log(`x:${(event.pageX-x)/this.width}  y:${(event.pageY-y)/this.height}`)
    })


});

