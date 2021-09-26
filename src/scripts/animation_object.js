import Projectile from "./projectiles/projectile";
import * as Util from './utils';
import { randomFirework } from "./firework_utils";
import { colorButtonListener, homeButtonListener, play } from "./nav_util";

export default class Animation {
    constructor(canvas) {
        this.canvas = canvas
        this.colorList = Util.establishColorList()
        this.active = true
        this.launching = true
        this.first = null
        this.last = null
        this.clearing = true
        this.fac3d = Util.getInputValue('fac3d')
    }

    activate() {
        this.launchFireworks();
        this.addEventListeners();
    }

    addEventListeners() {
        play(this)
        homeButtonListener(this)
        colorButtonListener(this)
        this.fireworkOnClick()
    }

    fireworkOnClick() {
        const that = this
        const bounds = that.canvas.getBoundingClientRect()
        this.canvas.addEventListener('click', launch)
        
        function launch(e) {
            let [w,h] = [e.pageX-bounds.left, e.pageY-bounds.top]
            let color = Util.selectRandomColor(that.colorList)

            let clickFW = new Projectile(w, h, that.fac3d, color)
            
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
                        if (firework.vel[1] > 0.15 ) {
                            const newFW = randomFirework(firework, this.fac3d*firework.pos[1]);
                            if (this.first===firework) this.first = newFW
                            Util.replaceNode(firework, newFW)
                        } 
                        break;
                    case 'Peony':
                        if (firework.time > 105) {
                            if (this.first === firework) this.first = firework.next
                            Util.removeNode(firework)
                        }
                        break;
                    case 'Chrysanthemum':
                        if (firework.time > 60) {
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