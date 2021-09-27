import Projectile from "../projectiles/projectile";
import { rand, selectRandomColor, joinNodes } from "../utils";
import Animation from "../animation_object";

export default class SolidAnimation extends Animation {
    constructor(canvas) {
        super(canvas);
        this.time = 500;
        this.fac3d = .01;
        this.rad = 1;
        this.vel = -2;
        this.acc = -5;
        this.grav = 1;
    };

    launchFireworks() {
        this.launching = true
        this.active = true
        const [w, h] = [this.canvas.width, this.canvas.height]
        let launchingInterval = setInterval( () => {
            
            if (this.active && this.colorList.length > 0) {
                ///Bottom Left
                setTimeout(() => { 
                    let [pw, ph] = [w*rand(0.5), h*(rand(0.6)+0.3)];

                    let newFW = new Projectile( {
                        pos: [pw, ph], 
                        vel: [ rand(.8)-0.4, ph * this.fac3d * this.vel * (rand(0.5)+0.5) ], 
                        acc: this.fac3d * this.acc,
                        grav: this.fac3d * this.grav,
                        rad: this.fac3d * ph * this.rad,
                        color: selectRandomColor(this.colorList),
                    })
                                    
                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
            
                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+rand(0.5)), h*(rand(0.6)+0.3)];

                    let newFW = new Projectile( {
                        pos: [pw, ph], 
                        vel: [ rand(.8)-0.4, ph * this.fac3d * this.vel * (rand(0.5)+0.5)], 
                        acc: this.fac3d * this.acc,
                        grav: this.fac3d * this.grav,
                        rad: this.fac3d * ph * this.rad,
                        color: selectRandomColor(this.colorList),
                    })

                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
            };
            if (!this.launching) clearInterval(launchingInterval);            
        }, this.time)
    };

}

