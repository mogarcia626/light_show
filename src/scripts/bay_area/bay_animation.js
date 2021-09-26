import Projectile from "../projectiles/projectile";
import { rand, selectRandomColor, joinNodes } from '../utils';
import Animation from "../animation_object";

export default class BayAnimation extends Animation{
    constructor(canvas) {
        super(canvas);
        this.time = 400;
        // this.fac3d = 1/400 
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
                    let color = selectRandomColor(this.colorList);
                    
                    let newFW = new Projectile(pw, ph, this.fac3d, color)
                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))  
                //Bottom Right
                setTimeout(() => { 
                    let [pw, ph] = [w*(0.5+rand(0.5)), h*(rand(0.36)+0.4)];  // 0.4 - 0.8
                    let color = selectRandomColor(this.colorList);
                    
                    let newFW = new Projectile(pw, ph, this.fac3d, color);
                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
                //Top Left
                setTimeout(() => { 
                    let [pw, ph] = [w*rand(0.5), h*(rand(0.12)+0.23)]
                    let color = selectRandomColor(this.colorList);
                    
                    let newFW = new Projectile(pw, ph, this.fac3d, color);
                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
                //Top Right
                setTimeout(() => {
                    let [pw, ph] = [ w*(0.5+rand(0.5)), h*(rand(0.075)+0.275)]
                    let color = selectRandomColor(this.colorList);
                    
                    let newFW = new Projectile(pw, ph, this.fac3d, color);
                    !this.first ? this.first = newFW : joinNodes(this.last, newFW);
                    this.last = newFW
                }, rand(this.time))
            };
            if (!this.launching) clearInterval(launchingInterval);            
        }, this.time)
    };
}

