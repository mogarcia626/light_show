import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import { returnToHome } from "../nav_util";

export default function launchSolidCanvas(bg, ctx, w, h) {
    let objects = [];
    let removeObjects = [];
    let newFireworks;
    let fac3d;
    const time = 450;
    const excludedColors = new Set();/*'blue', 'pink', 'yellow', 'green', 'red', 'purple', 'orange'*/
    let colorList = Util.establishColorList(excludedColors);
    const intervals = [];

    const launchFireworks = setInterval( () => {
        if (objects.length < 20) {

            ///Bottom Left
            setTimeout(() => { 
                let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.45)+0.45)];
                objects.push(new Projectile( {
                    pos: [pw, ph],                    
                    vel: [(Util.rand(0.5*w)/w)-0.25, -ph/200],
                    acc: -.015,
                    color: Util.selectRandomColor(colorList),
                    radius: ph/200,
                }))
            }, Util.rand(time))
        
            //Bottom Right
            setTimeout(() => { 
                let [pw, ph] = [w*(0.5+Util.rand(0.5)), h*(Util.rand(0.25)+0.75)];
                objects.push(new Projectile( {
                    pos: [pw, ph],
                    vel: [(Util.rand(0.5*w)/w)-0.25, -h/200],
                    acc: -0.01,
                    color: Util.selectRandomColor(colorList),
                    radius: ph/200,
                }))
            }, Util.rand(time))
        }
    }, time)  
        
    intervals.push(launchFireworks);

    const renderCanvas = setInterval( () => {
        newFireworks = []
        bg.draw(ctx)
        objects.forEach((firework, i) => {
            firework.draw(ctx)
            firework.move()

            switch (firework.getName()) {
                case 'Projectile':
                    if (firework.vel[1] > 0.15) {  
                        fac3d = firework.pos[1]/50                     
                        objects[i] = Util.randomFirework(firework, fac3d);
                    } 
                    break;
                case 'Peony':
                    if(firework.time > 550) {
                        removeObjects.push(i)
                    }   
                case 'Chrysanthemum':
                    if(firework.time > 600) {
                        removeObjects.push(i)
                    }                 
                    break;
                default:
                    break;
            }
                     
        });   

        removeObjects.forEach(idx => {
            delete objects[idx]
        });
        removeObjects = []

        objects = objects.cleanArray()
        objects = objects.concat(newFireworks);
    }, Util.FPS)

    intervals.push(renderCanvas);
    returnToHome(intervals);
}