import "./styles/index.scss";
import CanvasDisplay from './scripts/canvas'


document.addEventListener("DOMContentLoaded", function() {  
    //Close Welcome Modal and fill out Canvas with background of choice
    document.getElementById("close-modal").addEventListener('click', function() {        
        document.getElementById("welcome-modal").style.display="none";
        let canvasEl = CanvasDisplay(this.className)  
        
    })
    
    console.log(document.querySelector('canvas').innerHTML)
    // document.getElementById('canvas').addEventListener('click', () => {
    //     console.log(this)
    //     const rect = this.getBoundingClientRect();
    //     const x = event.clientX - rect.left
    //     const y = event.clientY - rect.top
    //     console.log("x: " + x + " y: " + y)
    // })




});

