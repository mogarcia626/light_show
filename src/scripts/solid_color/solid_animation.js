import Projectile from "../projectiles/projectile";
import { rand, selectRandomColor, joinNodes } from "../utils";
import Animation from "../animation_object";

export default class SolidAnimation extends Animation {
    constructor(canvas) {
        super(canvas);
        this.time = 600;
        this.fac3d = 1/150;
    };

    launchFireworks() {
        this.launching = true
        this.active = true
        const [w, h] = [this.canvas.width, this.canvas.height]
        let launchingInterval = setInterval( () => {
            
            if (this.active && this.colorList.length > 0) {
                ///Bottom Left
                setTimeout(() => { 
                    let [pw, ph] = [w*rand(0.5), h*(rand(0.45)+0.45)];

                    let newFW = new Projectile( {
                        pos: [pw, ph],                    
                        vel: [rand(0.6)-0.3, -ph/(rand(50)+100)],
                        acc: -.015,
                        color: selectRandomColor(this.colorList),
                        radius: Math.max(0, ph*this.fac3d),
                    });
                    
                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
            
                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+rand(0.5)), h*(rand(0.25)+0.75)];

                    let newFW = new Projectile( {
                        pos: [pw, ph],
                        vel: [rand(0.6)-0.3, -ph/(rand(50)+100)],
                        acc: -0.01,
                        color: selectRandomColor(this.colorList),
                        radius: Math.max(0, ph*this.fac3d),
                    });

                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
            };
            if (!this.launching) clearInterval(launchingInterval);            
        }, this.time)
    };

}

