import Projectile from "./projectiles/projectile";
import * as Util from './utils';
import { randomFirework } from "./firework_utils";
import { colorButtonListener, addHomeListener, stopButtonListener } from "./nav_util";

export default class Animation {
    constructor(canvas) {
        this.canvas = canvas
        this.colorList = null
        this.active = true
        this.launching = true
        this.first = null
        this.last = null
        this.clearing = true
    }

    activate() {        
        addHomeListener(this)
        colorButtonListener(this)
        stopButtonListener(this)
        this.fireworkOnClick()
        Util.establishColorList()
    }

    addEventListeners() {
    }

    fireworkOnClick() {
        const that = this
        const bounds = that.canvas.getBoundingClientRect()
        this.canvas.addEventListener('click', launch)
        
        function launch(e) {
            let [w,h] = [e.pageX-bounds.left, e.pageY-bounds.top]

            let clickFW = new Projectile( {
                pos: [w, h], 
                vel: [ Util.rand(.8)-0.4, h*that.fac3d*that.vel ], 
                acc: that.fac3d * that.acc,
                grav: that.fac3d * that.grav,
                rad: that.fac3d * h * that.rad,
                color: Util.selectRandomColor(that.colorList),
            })
            
            !that.first ? that.first = clickFW : Util.joinNodes(that.last, clickFW);
            that.last = clickFW
        }
    }

    render() {
        const ctx = this.canvas.getContext('2d');
        if (this.active && !this.closed) {
            if (this.clearing) ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            let firework = this.first
            while (firework) {
                firework.draw(ctx)
                firework.move()
                switch (firework.getName()) {
                    case 'Projectile':
                        if (firework.vel[1] > 0.2 ) {
                            const newFW = randomFirework(firework, this.fac3d);
                            if (this.first===firework) this.first = newFW
                            Util.replaceNode(firework, newFW)
                        } 
                        break;
                    case 'Peony':
                        if (firework.time > 75) {
                            if (this.first === firework) this.first = firework.next
                            Util.removeNode(firework)
                        }
                        break;
                    case 'Chrysanthemum':
                        if (firework.time > 75) {
                            if (this.first === firework) this.first = firework.next
                            Util.removeNode(firework)
                        }
                    default: break;
                }  
                
                firework = firework.next
            };
            window.requestAnimationFrame(this.render.bind(this))
        }
             
    }

}