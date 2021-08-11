import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import { returnToHome, openColorMenu } from "../nav_util";
import { drawBayAreaBackground } from "./bay_background";

export default class BayCanvas {
    constructor() {
        this.background = 'bay-area-canvas'
        this.width = 0.9*window.innerWidth;
        this.height = Math.min(0.9*window.innerWidth*0.5625, 0.9*window.innerHeight);
        this.activeFireworks = []
        this.removeFireworks = []
        this.newfireworks = []
        this.fac3d = 1
        this.time = 1000
        this.colorList = Util.establishColorList()
        this.active = true
        this.closed = false
    }

    activate(ctx) {
        this.active = true
        this.renderCanvas(ctx)
        this.launchFireworks(ctx);
        this.addEventListeners(ctx);
    }
    
    drawBackground(ctx) {
        drawBayAreaBackground(ctx, this.width, this.height)
    }
    
    addEventListeners(ctx) {
        returnToHome(this)
        openColorMenu(this, ctx)
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
                        radius: ph/250,
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
                        radius: ph/250,
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
                        radius: ph/250,
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
                        radius: ph/250,
                    }))
                }, Util.rand(this.time))
            };
            if (this.closed) Util.freeze(launching);            
        }, this.time)
    };

    renderCanvas(ctx) {
        let renderFireworks = setInterval( () => {
            if (this.active) {
                this.drawBackground(ctx)
                this.activeFireworks.forEach((firework, i) => {
                    firework.draw(ctx)
                    firework.move()
    
                    switch (firework.getName()) {
                        case 'Projectile':
                            if (firework.vel[1] > 0.15) {
                                if (firework.pos[1] < 0.39*this.height) {
                                    this.fac3d = firework.pos[1]/200
                                } else {this.fac3d = firework.pos[1]/175}
                                
                                this.activeFireworks[i] = Util.randomFirework(firework, this.fac3d);
                            } 
                            break;
                        case 'Peony':
                            if(firework.time > 550) this.removeFireworks.push(i)
                            break;  
                        case 'Chrysanthemum':
                            if(firework.time > 600) this.removeFireworks.push(i)               
                            break;
                        default:
                            break;
                    }
                            
                });
            }
                        
            this.removeFireworks.forEach(idx => {
                delete this.activeFireworks[idx]
            });
            this.removeFireworks = []

            this.activeFireworks = this.activeFireworks.cleanArray()
            if (this.closed) Util.freeze(renderFireworks);            
        }, Util.FPS)

        const settingsButtons = document.getElementsByClassName('open-modal')
        Object.values(settingsButtons).forEach(button => {
            button.addEventListener('click', e => {
                this.active = false
            })
        });
    }

}

