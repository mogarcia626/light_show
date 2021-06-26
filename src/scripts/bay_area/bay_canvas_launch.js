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
            pos: [w*rand(), h*(rand(0.35)+0.4)],
            vel: [rand(0.5)-0.25, -0.75],
            acc: -0.01,
            color: COLORS[randInt(COLORS.length)]
        }))
    }, 2000)  

        
    // setInterval( () => {
    //     objects.push(new Projectile( {
    //         pos: [ w*rand(), h*(rand(0.12)+0.23)],
    //         vel: [rand(0.5)-0.25, -0.5],
    //         acc: -0.008,
    //         color: COLORS[randInt(COLORS.length)]
    //     }))
    // }, 900)  
    

    setInterval( () => {
        newFireworks = []
        bg.drawOnCanvas(ctx)

        objects.forEach((firework, i) => {
            firework.draw(ctx)
            firework.move()

            


            switch (firework.getName()) {
                case 'Projectile':
                    if (firework.vel[1] > 0) {

                        if (firework.pos[1] < 0.39*h) {
                            fac3d = 8
                        } else {fac3d = 1}

                        objects[i] = new Peony({
                            pos: firework.pos,
                            vel: ((rand(0.15))+0.5)/fac3d,
                            color: firework.color,
                            radius: rand(firework.radius)+1,
                            trailLength: randInt(10)+10
                        })
                    } 
                    break;
                case 'Peony':
                    if(firework.time > 400) {
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