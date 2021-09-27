import Projectile from "../projectiles/projectile";
import { rand, selectRandomColor, joinNodes } from '../utils';
import Animation from "../animation_object";

export default class BayAnimation extends Animation{
    constructor(canvas) {
        super(canvas);
        this.time = 600;
        this.fac3d = .0025
        this.rad = 2;
        this.vel = -3;
        this.acc = -12;
        this.grav = 2;
    }
    
    launchFireworks() {
        this.launching = true
        this.active = true
        const [w, h] = [this.canvas.width, this.canvas.height]
        let launchingInterval = setInterval( () => {
            
            if (this.active && this.colorList.length > 0) {
                ///Bottom Left
                setTimeout(() => { 
                    let [pw, ph] = [w*rand(0.5), h*(rand(0.36)+0.44)];  // 0.4 - 0.8
                    
                    let newFW = new Projectile( {
                        pos: [pw, ph], 
                        vel: [ rand(.8)-0.4, ph * this.fac3d * this.vel ], 
                        acc: this.fac3d * this.acc,
                        grav: this.fac3d * this.grav,
                        rad: this.fac3d * ph * this.rad,
                        color: selectRandomColor(this.colorList),
                        smokeLength: this.clearing ? null : 0,
                        trailLength: this.clearing ? null : 0,
                    })

                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time)) 

                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+rand(0.5)), h*(rand(0.36)+0.4)];  // 0.4 - 0.8
                    
                    let newFW = new Projectile( {
                        pos: [pw, ph], 
                        vel: [ rand(.8)-0.4, ph * this.fac3d * this.vel ], 
                        acc: this.fac3d * this.acc,
                        grav: this.fac3d * this.grav,
                        rad: this.fac3d * ph * this.rad,
                        color: selectRandomColor(this.colorList),
                        trailLength: this.trailLength,
                        smokeLength: this.smokeLength,
                    })

                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))

                //Top Left
                setTimeout(() => { 
                    let [pw, ph] = [w*rand(0.5), h*(rand(0.12)+0.23)]
                    
                    let newFW = new Projectile( {
                        pos: [pw, ph], 
                        vel: [ rand(.8)-0.4, ph * this.fac3d * this.vel ], 
                        acc: this.fac3d * this.acc,
                        grav: this.fac3d * this.grav,
                        rad: this.fac3d * ph * this.rad,
                        color: selectRandomColor(this.colorList),
                        trailLength: this.trailLength,
                        smokeLength: this.smokeLength,
                    })

                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))

                //Top Right
                setTimeout(() => {
                    let [pw, ph] = [ w*(0.5+rand(0.5)), h*(rand(0.075)+0.275)]
                    
                    let newFW = new Projectile( {
                        pos: [pw, ph], 
                        vel: [ rand(.8)-0.4, ph * this.fac3d * this.vel ], 
                        acc: this.fac3d * this.acc,
                        grav: this.fac3d * this.grav,
                        rad: this.fac3d * ph * this.rad,
                        color: selectRandomColor(this.colorList),
                        trailLength: this.trailLength,
                        smokeLength: this.smokeLength,
                    })

                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
            };
            if (!this.launching) clearInterval(launchingInterval);            
        }, this.time)
    };
}

