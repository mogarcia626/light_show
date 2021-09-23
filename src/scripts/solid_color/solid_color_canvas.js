import Projectile from "../projectiles/projectile";
import * as Util from '../utils';
import { returnToHome, openColorMenu } from "../nav_util";

export default class SolidCanvas {
    constructor(color) {
        this.background = 'solid-color-canvas'
        this.color = color
        this.width = 0.9*window.innerWidth;
        this.height = Math.min(0.9*window.innerWidth*0.5625, 0.9*window.innerHeight);
        this.activeFireworks = []
        this.removeFireworks = []
        this.newfireworks = []
        this.fac3d = 1
        this.time = 600
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
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(0, 0, this.width, this.height);
        ctx.fill();
    }

    addEventListeners(ctx) {
        returnToHome(this)
        openColorMenu(this, ctx)
        this.fireworkOnClick()
    }

    fireworkOnClick() {
        const that = this
        const canvas = document.querySelector('canvas')
        canvas.addEventListener('click', function(e) {
            const [w, h] = [that.width, that.height]
            that.activeFireworks.push(new Projectile( {
                pos: [e.pageX-this.offsetLeft-6, e.pageY-this.offsetTop-6],
                vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                acc: -0.008,
                color: Util.selectRandomColor(that.colorList),
                radius: Math.max(h/250,0),
            }))
            console.log(this.radius)
            // console.log(this.offsetLeft)
            // console.log(this.clientLeft)
        })
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
                        this.fac3d = firework.pos[1]/50                     
                        this.activeFireworks[i] = Util.randomFirework(firework, this.fac3d);
                    } 
                    break;
                case 'Peony':
                    if(firework.time > 550) {
                        this.removeFireworks.push(i)
                    }   
                case 'Chrysanthemum':
                    if(firework.time > 600) {
                        this.removeFireworks.push(i)
                    }                 
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

