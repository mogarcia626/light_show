import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import CanvasTemplate from "../canvas_template";
import { drawBayAreaBackground } from "./bay_background";

export default class BayCanvas extends CanvasTemplate{
    constructor() {
        super();
        this.background = 'bay-area-canvas'
        this.time = 1000
        this.fac3d = 1/400 
    }
    
    drawBackground(ctx) {
        drawBayAreaBackground(ctx, this.width, this.height)
    }
    
    launchFireworks() {
        const [w, h] = [this.width, this.height]
        let launching = setInterval( () => {
            
            if (this.activeFireworks.length < 30 && this.active && this.colorList.length > 0) {
                ///Bottom Left
                setTimeout(() => { 
                    let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.36)+0.44)];  // 0.4 - 0.8
                    this.activeFireworks.push(new Projectile( {
                        pos: [pw, ph],
                        vel: [(Util.rand(0.5*w)/w)-0.25, -ph/400],
                        acc: -.01,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    }))
                }, Util.rand(this.time))        
                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+Util.rand(0.5)), h*(Util.rand(0.36)+0.4)];  // 0.4 - 0.8
                    this.activeFireworks.push(new Projectile( {
                        pos: [pw, ph],
                        vel: [(Util.rand(0.5*w)/w)-0.25, -h/400],
                        acc: -0.01,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    }))
                }, Util.rand(this.time))
                //Top Left
                setTimeout(() => { 
                    let [pw, ph] = [w*Util.rand(0.5), h*(Util.rand(0.12)+0.23)]
                    this.activeFireworks.push(new Projectile( {
                        pos: [pw, ph],
                        vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                        acc: -0.008,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    }))
                }, Util.rand(this.time))
                //Top Right
                setTimeout(() => {
                    let [pw, ph] = [ w*(0.5+Util.rand(0.5)), h*(Util.rand(0.075)+0.275)]
                    this.activeFireworks.push(new Projectile( {
                        pos: [pw, ph],
                        vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                        acc: -0.008,
                        color: Util.selectRandomColor(this.colorList),
                        radius: Math.max(0, ph/250),
                    }))
                }, Util.rand(this.time))
            };
            if (this.closed) Util.freeze(launching);            
        }, this.time)
    };
}

