 import BayCanvas from './bay_area/bay_canvas';
 import SolidCanvas from './solid_color/solid_color_canvas';
 
 function CanvasDisplay(background, color = null) {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 0.8*window.innerWidth;
    canvas.height = Math.min(0.8*window.innerWidth*0.5625, 0.8*window.innerHeight);        
    
    let bg;
    switch (background) {
        case 'bay-area-canvas':
            bg = new BayCanvas();
            bg.activate(ctx)
            break;
        case 'solid-color-canvas': 
            bg = new SolidCanvas(color);
            bg.activate(ctx)
            break;
        default: bg = new BayCanvas();
    } 

}


export default CanvasDisplay