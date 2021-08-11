import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import { returnToHome, openColorMenu } from "../nav_util";

export default function launchBayCanvas(bg, ctx, w, h, excludedColors = new Set()) {
    let activeFireworks = [];
    let removeFireworks = [];
    let newFireworks;
    let fac3d;
    const time = 1000;
    let colorList = Util.establishColorList(excludedColors)
    // const intervals = []
    // use requestAnimationFrame at some point here
    const launchFireworks = setInterval( () => {
        console.log('check')
        if (activeFireworks.length < 25) {
            ///Bottom Left
            setTimeout(() => { 
                let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.36)+0.44)];  // 0.4 - 0.8
                activeFireworks.push(new Projectile( {
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
                activeFireworks.push(new Projectile( {
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
                activeFireworks.push(new Projectile( {
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
                activeFireworks.push(new Projectile( {
                    pos: [pw, ph],
                    vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                    acc: -0.008,
                    color: Util.selectRandomColor(colorList),
                    radius: ph/250,
                }))
            }, Util.rand(time))
        }
    }, time)  
        
    // intervals.push(launchFireworks);

    const renderCanvas = setInterval( () => {
        newFireworks = []
        bg.draw(ctx)
        activeFireworks.forEach((firework, i) => {
            firework.draw(ctx)
            firework.move()

            switch (firework.getName()) {
                case 'Projectile':
                    if (firework.vel[1] > 0.15) {
                        if (firework.pos[1] < 0.39*h) {
                            fac3d = firework.pos[1]/200
                        } else {fac3d = firework.pos[1]/175}
                        
                        activeFireworks[i] = Util.randomFirework(firework, fac3d);
                    } 
                    break;
                case 'Peony':
                    if(firework.time > 550) removeFireworks.push(i)
                    break;  
                case 'Chrysanthemum':
                    if(firework.time > 600) removeFireworks.push(i)               
                    break;
                default:
                    break;
            }
                     
        });
                       
        removeFireworks.forEach(idx => {
            delete activeFireworks[idx]
        });
        removeFireworks = []

        activeFireworks = activeFireworks.cleanArray()
        activeFireworks = activeFireworks.concat(newFireworks);
    }, Util.FPS)
    
    const settingsButtons = document.getElementsByClassName('open-modal')
    Object.values(settingsButtons).forEach(button => {
        button.addEventListener('click', e => {
            clearInterval(launchFireworks)
            clearInterval(renderCanvas)
        })
    });
    // intervals.push(renderCanvas);
    returnToHome();
    openColorMenu(
        launchBayCanvas, bg, ctx, w, h, excludedColors
    )
}