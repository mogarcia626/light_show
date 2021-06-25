 import BayCanvas from './bay_canvas';
 import Projectile from './projectile';
 import {randInt, rand} from './utils';
 
 const COLORS = ['red', 'blue', 'green', 'pink', 'yellow', 'gold']
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

    bg.drawOnCanvas(ctx)
    const objects = []

    setInterval( () => {
        objects.push(new Projectile( {
            pos: [canvas.width*rand(), canvas.height*(rand(0.3)+0.4)],
            vel: [rand(0.5)-0.25, -0.5],
            acc: -0.01,
            color: COLORS[randInt(COLORS.length)]

        }))

    }, 100)  
    
    setInterval( () => {
        const removeObjects = []
        bg.drawOnCanvas(ctx)
        
        objects.forEach((firework, i) => {
            firework.draw(ctx)
            firework.move()

            switch (firework.getName()) {
                case 'Projectile':
                    if (firework.vel[1] > 0.25) {
                        removeObjects.push(i)
                    } 
            
                default:
                    break;
            }
                     
        });
        
        removeObjects.forEach((idx) => {
            delete objects[idx]
        })
    }, 1000/60)


}

export default CanvasDisplay