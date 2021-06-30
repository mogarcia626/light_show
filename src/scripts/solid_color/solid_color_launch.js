import Projectile from "../projectiles/projectile";
import {selectRandomColor, rand, FPS, randomFirework, returnToHome} from '../utils';

export default function launchSolidCanvas(bg, ctx, w, h) {
    let objects = [];
    let removeObjects = [];
    let newFireworks;
    let fac3d;
    const time = 450;
    const excludedColors = [/*'blue', 'pink', 'yellow', 'green', 'red', 'purple', 'orange'*/]
    const intervals = []

    const launchFireworks = setInterval( () => {
        if (objects.length < 20) {

            ///Bottom Left
            setTimeout(() => { 
                let [pw, ph] = [w*rand(0.5), h*(rand(0.45)+0.45)];
                objects.push(new Projectile( {
                    pos: [pw, ph],                    
                    vel: [(rand(0.5*w)/w)-0.25, -ph/200],
                    acc: -.015,
                    color: selectRandomColor(excludedColors),
                    radius: ph/200,
                }))
            }, rand(time))
        
            //Bottom Right
            setTimeout(() => { 
                let [pw, ph] = [w*(0.5+rand(0.5)), h*(rand(0.25)+0.75)];
                objects.push(new Projectile( {
                    pos: [pw, ph],
                    vel: [(rand(0.5*w)/w)-0.25, -h/200],
                    acc: -0.01,
                    color: selectRandomColor(excludedColors),
                    radius: ph/200,
                }))
            }, rand(time))
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
                        objects[i] = randomFirework(firework, fac3d);
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
    }, FPS)

    intervals.push(renderCanvas);
    returnToHome(intervals);
}