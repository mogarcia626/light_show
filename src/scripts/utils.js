import Peony from "./projectiles/peony";
import Chrysanthemum from './projectiles/chrysanthemum'

export function randInt(num) {
    return Math.floor(Math.random() * num)
}

export function rand(num = 1) {
    return Math.random() * num
}

export function addVectors(vec1, vec2) {
    return [ (vec1[0] + vec2[0]), (vec1[1] + vec2[1]) ]
}

export function multiplyVector(vec, fac) {
    return [ (vec[0] * fac), (vec[1] * fac) ]
}

//Will create an array of evenly distrubuted subvectors.  length: num, velocity: v
export function subVectors(v, num, angle=0) {    
    const vecs = [];
    let newVec;
    for (let i = 0; i < num; i++) {
        newVec = [0,0]
            newVec[0] = v * Math.cos((2*Math.PI * i/num) + angle )
            newVec[1] = v * Math.sin((2*Math.PI * i/num) + angle ) 
        vecs.push(newVec);
    }
    return vecs
}

export function randomFirework(projectile, fac3d) {
    let choice = randInt(2);
    // choice = 0
    switch (choice) {
        case 0:
            return new Peony({
                pos: projectile.pos,
                vel: ((rand(0.5))+0.5)*fac3d,
                color: projectile.color,
                radius: projectile.radius*0.4*fac3d,
            })
        case 1:
        return new Chrysanthemum({
            pos: projectile.pos,
            vel: ((rand(0.5))+0.5)*fac3d,
            color: projectile.color,
            radius: projectile.radius*fac3d,
        })
        default:
            break;
    }
}

export function returnToHome(intervalArray) {
    const homeButton = document.getElementById('back-to-main');
    homeButton.addEventListener('click', function() {  
        intervalArray.forEach(interval => {
            clearInterval(interval)
        });          
        document.getElementById("welcome-modal").style.display="block";
        document.getElementById('canvas-menu').style.display="none";    
    }) 
}

//Classname.getName() wil return 'class name'
Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};

Array.prototype.cleanArray = function() {
    return this.filter(el => el );
}

export const COLORS = {
    blue:['#3340DB', '#504DF4', '#539DB3', '#39657E'],
    pink:['#DE5BF8', '#FC7F81', '#ff007f', '#ff1493'],
    yellow: ['#ffff00', '#e2bb2b', '#b69835'],
    green: ['#6e9b81', '#2b583d', '#a0c0ad', '#adff2f'],
    red: ['#C63347', '#FA5348', '#F75781', '#C11E4B'],
    purple: ['#A76BFE', '#792BB2', '#E365E4'],
    orange: ['#F28E63', '#F9AE9B', '#B74F2B', '#9c805b', '#956548'], 
    white: ['#C0C0C0', '#FFFAFA', '#FFFAFA']
}

export function establishColorList(excludeArr = new Set()) {
    let colors = Object.keys(COLORS)
    if (excludeArr.size > 0) {
        for (let i = 0; i < excludeArr.size; i++) {
            colors.forEach((color, j) => {
                if (excludeArr[i] === color) delete colors[j]
            });                            
        }
        colors = colors.cleanArray()        
    }
    return colors
}

export function selectRandomColor(colors) {
    const colorKey = colors[randInt(colors.length)]
    return COLORS[colorKey][randInt(COLORS[colorKey].length)]
}


export const FPS = 1000/180



// Scale the length of a vector by the given amount.
export function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
};
export function inherits(ChildClass, BaseClass) {
    ChildClass.prototype = Object.create(BaseClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
};



