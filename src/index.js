import "./styles/index.scss";
import CanvasDisplay from './scripts/canvas_display'


document.addEventListener("DOMContentLoaded", function() {     
    //Close Welcome Modal and fill out Canvas with background of choice
    const canvasButtons = document.getElementsByClassName('close-modal');
    Object.values(canvasButtons).forEach(button => {
        button.addEventListener('click', function(e) {
            const color = document.getElementById('solidBackgroundColor').value
            document.getElementById("welcome-modal").style.display="none";
            document.getElementById("canvas-menu").style.display="flex";                       
            CanvasDisplay(e.target.id, color)  
        })            
    });

    // Add event listener for `click` events.
    let cv = document.querySelector('canvas')
    cv.addEventListener('click', function(event) {
        let x = this.offsetLeft
        let y = this.offsetTop
        // console.log(`x:${(event.pageX)}  y:${event.pageY}`)
    })


});

