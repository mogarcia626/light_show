import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import CanvasTemplate from "../canvas_template";

export default class SolidCanvas extends CanvasTemplate {
    constructor(color) {
        super();
        this.background = 'solid-color-canvas';
        this.color = color;
        this.time = 600;
        this.fac3d = 1/50;
    };
    
    drawBackground(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(0, 0, this.width, this.height);
        ctx.fill();
    }

    launchFireworks() {
        const [w, h] = [this.width, this.height]
        let launching = setInterval( () => {
            
            if (this.activeFireworks.length < 25 && this.active && this.colorList.length > 0) {
                ///Bottom Left
                setTimeout(() => { 
                    let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.45)+0.45)];
                    this.activeFireworks.push(new Projectile( {
                        pos: [pw, ph],                    
                        vel: [(Util.rand(0.5*w)/w)-0.25, -ph/(Util.rand(50)+150)],
                        acc: -.015,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/200),
                    }))
                }, Util.rand(this.time))
            
                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+Util.rand(0.5)), h*(Util.rand(0.25)+0.75)];
                    this.activeFireworks.push(new Projectile( {
                        pos: [pw, ph],
                        vel: [(Util.rand(0.5*w)/w)-0.25, -h/200],
                        acc: -0.01,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/200),
                    }))
                }, Util.rand(this.time))
            };
            if (this.closed) Util.freeze(launching);            
        }, this.time)
    };

}

