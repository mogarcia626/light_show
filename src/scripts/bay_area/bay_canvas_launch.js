import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import { returnToHome, openColorMenu } from "../nav_util";

export default function launchBayCanvas(bg, ctx, w, h, excludedColors = new Set()) {
    let objects = [];
    let removeObjects = [];
    let newFireworks;
    let fac3d;
    const time = 900;
    const colorList = Util.establishColorList(excludedColors)
    const intervals = []

    const launchFireworks = setInterval( () => {
        if (objects.length < 25) {

            ///Bottom Left
            setTimeout(() => { 
                let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.36)+0.44)];  // 0.4 - 0.8
                objects.push(new Projectile( {
                    pos: [pw, ph],
                    vel: [(Util.rand(0.5*w)/w)-0.25, -ph/400],
                    acc: -.01,
                    color: Util.selectRandomColor(colorList),
                    radius: ph/250,
                }))
            }, Util.rand(time))
        
        //Bottom Right
            setTimeout(() => { 
                let [pw, ph] = [w*(0.5+Util.rand(0.5)), h*(Util.rand(0.36)+0.4)];  // 0.4 - 0.8
                objects.push(new Projectile( {
                    pos: [pw, ph],
                    vel: [(Util.rand(0.5*w)/w)-0.25, -h/400],
                    acc: -0.01,
                    color: Util.selectRandomColor(colorList),
                    radius: ph/250,
                }))
            }, Util.rand(time))
            //Top Left
            setTimeout(() => { 
                let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.12)+0.23)]
                objects.push(new Projectile( {
                    pos: [pw, ph],
                    vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                    acc: -0.008,
                    color: Util.selectRandomColor(colorList),
                    radius: ph/250,
                }))
            }, Util.rand(time))
            //Top Right
            setTimeout(() => {
                let [pw, ph] = [ w*(0.5+Util.rand(0.5)), h*(Util.rand(0.075)+0.275)]
                objects.push(new Projectile( {
                    pos: [pw, ph],
                    vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                    acc: -0.008,
                    color: Util.selectRandomColor(colorList),
                    radius: ph/250,
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

                        if (firework.pos[1] < 0.39*h) {
                            fac3d = firework.pos[1]/200
                        } else {fac3d = firework.pos[1]/175}
                        
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
    openColorMenu(launchBayCanvas, bg, ctx, w, h, intervals, excludedColors)
}