import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import Animation from "../animation_object";

export default class SolidAnimation extends Animation {
    constructor(canvas) {
        super(canvas);
        this.time = 600;
        this.fac3d = 1/150;
    };

    launchFireworks() {
        const [w, h] = [this.canvas.width, this.canvas.height]
        let launching = setInterval( () => {
            
            if (this.active && this.colorList.length > 0) {
                ///Bottom Left
                setTimeout(() => { 
                    let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.45)+0.45)];
                    let newFW = new Projectile( {
                        pos: [pw, ph],                    
                        vel: [Util.rand(0.6)-0.3, -ph/(Util.rand(50)+100)],
                        acc: -.015,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph*this.fac3d),
                    });
                    !this.first ? this.first = newFW : Util.joinNodes(this.last, newFW);
                    this.last = newFW
                }, Util.rand(this.time))
            
                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+Util.rand(0.5)), h*(Util.rand(0.25)+0.75)];
                    let newFW = new Projectile( {
                        pos: [pw, ph],
                        vel: [Util.rand(0.6)-0.3, -ph/(Util.rand(50)+100)],
                        acc: -0.01,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph*this.fac3d),
                    });
                    !this.first ? this.first = newFW : Util.joinNodes(this.last, newFW);
                    this.last = newFW
                }, Util.rand(this.time))
            };
            if (this.closed) Util.freeze(launching);            
        }, this.time)
    };

}

