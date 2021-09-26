import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import Animation from "../animation_object";

export default class BayAnimation extends Animation{
    constructor(canvas) {
        super(canvas);
        this.time = 800
        this.fac3d = 1/400 
    }
    
    launchFireworks() {
        const [w, h] = [this.canvas.width, this.canvas.height]
        let launching = setInterval( () => {
            
            if (this.active && this.colorList.length > 0) {
                ///Bottom Left
                setTimeout(() => { 
                    let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.36)+0.44)];  // 0.4 - 0.8
                    let newFW = new Projectile( {
                        pos: [pw, ph],
                        vel: [Util.rand(0.6)-0.3, -ph/300],
                        acc: -.01,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    });
                    !this.first ? this.first = newFW : Util.joinNodes(this.last, newFW);
                    this.last = newFW
                }, Util.rand(this.time))        
                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+Util.rand(0.5)), h*(Util.rand(0.36)+0.4)];  // 0.4 - 0.8
                    let newFW = new Projectile( {
                        pos: [pw, ph],
                        vel: [Util.rand(0.6)-0.3, -h/300],
                        acc: -0.01,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    });
                    !this.first ? this.first = newFW : Util.joinNodes(this.last, newFW);
                    this.last = newFW
                }, Util.rand(this.time))
                //Top Left
                setTimeout(() => { 
                    let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.12)+0.23)]
                    let newFW = new Projectile( {
                        pos: [pw, ph],
                        vel: [Util.rand(0.6)-0.3, -h/600],
                        acc: -0.008,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    });
                    !this.first ? this.first = newFW : Util.joinNodes(this.last, newFW);
                    this.last = newFW
                }, Util.rand(this.time))
                //Top Right
                setTimeout(() => {
                    let [pw, ph] = [ w*(0.5+Util.rand(0.5)), h*(Util.rand(0.075)+0.275)]
                    let newFW = new Projectile( {
                        pos: [pw, ph],
                        vel: [Util.rand(0.6)-0.3, -h/600],
                        acc: -0.008,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    });
                    !this.first ? this.first = newFW : Util.joinNodes(this.last, newFW);
                    this.last = newFW
                }, Util.rand(this.time))
            };
            if (this.closed) Util.freeze(launching);            
        }, this.time)
    };
}

