import Peony from "./projectiles/peony";
import Chrysanthemum from './projectiles/chrysanthemum'
import { randInt, rand } from './utils'

//returns the type of object as a string [].getName -> 'Array'
Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};

export function randomFirework(projectile, fac3d) {
    let choice = randInt(2);
    // choice = 0
    switch (choice) {
        case 0:
            return new Peony({
                pos: projectile.pos,
                vel: ((rand(0.5))+1.5)*fac3d,
                color: projectile.color,
                radius: Math.max(0, projectile.radius*0.4*fac3d),
            })
        case 1:
        return new Chrysanthemum({
            pos: projectile.pos,
            vel: ((rand(0.5))+1.5)*fac3d,
            color: projectile.color,
            radius: Math.max(0, projectile.radius*fac3d),
        })
        default:
            break;
    }
}