 import BayCanvas from './bay_area/bay_canvas';
 import launchBayCanvas from './bay_area/bay_canvas_launch';
 import SolidCanvas from './solid_color/solid_color_canvas';
 import launchSolidCanvas from './solid_color/solid_color_launch';
 
 function CanvasDisplay(background, color = null) {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 0.9*window.innerWidth;
    canvas.height = Math.min(0.9*window.innerWidth*0.5625, 0.9*window.innerHeight);        
    
    let bg;
    switch (background) {
        case 'bay-area-canvas':
            bg = new BayCanvas();
            bg.draw(ctx)
            launchBayCanvas(bg, ctx, canvas.width, canvas.height);
            break;
        case 'solid-color-canvas':   
            bg = new SolidCanvas(color);
            bg.draw(ctx)
            launchSolidCanvas(bg, ctx, canvas.width, canvas.height);
            break;
        default: bg = new BayCanvas();
    } 

}


export default CanvasDisplay