import Projectile from "../projectiles/projectile";
import Peony from "../projectiles/peony";
import {COLORS, rand, randInt, FPS} from '../utils';

export default function launchBayCanvas(bg, ctx, w, h) {
    let objects = []
    let removeObjects = []
    let newFireworks = []
    let fac3d;

    setInterval( () => {
        objects.push(new Projectile( {
            pos: [w*rand(), h*(rand(0.3)+0.35)],
            vel: [rand(0.5)-0.25, -0.5],
            acc: -0.01,
            color: COLORS[randInt(COLORS.length)]
        }))
    }, 1500)  

    
    setInterval( () => {
        objects.push(new Projectile( {
            pos: [w*rand(), h*(rand(0.06)+0.25)],
            vel: [rand(0.5)-0.25, -0.5],
            acc: -0.008,
            color: COLORS[randInt(COLORS.length)]
        }))
    }, 2500)  
    

    setInterval( () => {
        newFireworks = []
        bg.drawOnCanvas(ctx)

        objects.forEach((firework, i) => {
            firework.draw(ctx)
            firework.move()

            


            switch (firework.getName()) {
                case 'Projectile':
                    if (firework.vel[1] > 0) {

                        if (firework.pos[1] < 0.4*h) {
                            fac3d = 6
                        } else {fac3d = 1}

                        objects[i] = new Peony({
                            pos: firework.pos,
                            vel: ((rand()*0.1)+0.2)/fac3d,
                            color: firework.color,
                            radius: firework.radius,
                            trailLength: randInt(20)+10
                        })
                    } 
                    break;
                case 'Peony':
                    if(firework.time > 500) {
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
        objects = objects.cleanArray();
        objects.concat(newFireworks)
    }, FPS)


}