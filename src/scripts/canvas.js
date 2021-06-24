 import BayCanvas from './bay_canvas'
 
 function CanvasDisplay(background) {

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 0.96*window.innerWidth;
    canvas.height = Math.min(0.96*window.innerWidth*0.5625, 0.96*window.innerHeight);        
    
    let bg;
    switch (background) {
        case 'bay-area-canvas':
            bg = new BayCanvas();
        default: bg = new BayCanvas();
    } 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bg.drawOnCanvas(ctx)
}

export default CanvasDisplay