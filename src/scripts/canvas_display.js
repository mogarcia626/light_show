 import BayAnimation from './bay_area/bay_animation';
import { drawBayAreaBackground } from './bay_area/bay_background';
 import SolidAnimation from './solid_color/solid_animation';
import drawSolidBackground from './solid_color/solid_background';
 
 function CanvasDisplay(background, color = null) {
     const w = Math.min(0.7*window.innerWidth, 1200);
     const h = Math.min(0.7*window.innerWidth*2/3, 0.7*window.innerHeight);

    const canvas = document.getElementById('animation-canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    const bg = document.getElementById('background-canvas');
    bg.width = w;
    bg.height = h;
    const bgCtx = bg.getContext('2d')
    
    let animation;
    switch (background) {
        case 'bay-area-canvas':
            drawBayAreaBackground(bgCtx, w, h)
            animation = new BayAnimation(canvas);
            animation.activate(ctx)
            break;
        case 'solid-color-canvas': 
            drawSolidBackground(bgCtx, w, h, color)
            animation = new SolidAnimation(canvas);
            animation.activate(ctx)
            break;
        default: 
            break;
    } 

}


export default CanvasDisplay