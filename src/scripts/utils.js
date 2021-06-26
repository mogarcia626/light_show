import Projectile from './projectiles/projectile';

export function randInt(num) {
    return Math.floor(Math.random() * num)
}

export function rand(num = 1) {
    return Math.random() * num
}

export function subVectors(num, initialVecArr) {
    //initialVecArray is an array of 2 vectors with an equal velocity 
    const vecs = [];
    const velSquare = Math.pow(initialVecArr[0][0], 2) + Math.pow(initialVecArr[0][1], 2);
    let newVec = ['', ''];

    let xMult = 1;
    let yMult = 1;
    if( initialVecArr[0][0] < 0 || initialVecArr[1][0] < 0) xMult = -1
    if( initialVecArr[0][1] < 0 || initialVecArr[1][1] < 0) yMult = -1
    
    // if (num%2===1) {
    //     pairs = (num-1)/2
    //     let v = Math.sqrt(velSquare/2)
    //     vecs.push([xMult*v, yMult*v])
    // }

    const nums = [];
    for (let i = 0; i <= num; i++) {
        nums.push(i)
    }

    nums.forEach(n => {
        newVec[0] = n/num * (initialVecArr[1][0] - initialVecArr[0][0])
        newVec[1] = Math.sqrt( velSquare - Math.pow(newVec[0], 2) )
        vecs.push([xMult * newVec[0], yMult * newVec[1]])
        vecs.push([xMult * newVec[1], yMult * newVec[0]])
    });
    return vecs; 
}


export function circleVectorArray(vel, numPerQuadrant) {
    const ne = subVectors(numPerQuadrant, [[0, -vel], [vel, 0]]);
    const se = subVectors(numPerQuadrant, [[vel, 0], [0, vel]]);
    const sw = subVectors(numPerQuadrant, [[0, vel], [-vel, 0]]);
    const nw = subVectors(numPerQuadrant, [[-vel, 0], [0, -vel]]);

    return ne.concat(se).concat(sw).concat(nw);
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

export const COLORS = ['red', 'blue', 'green', 'pink', 'yellow', 'gold']
export const FPS = 1000/120



// Scale the length of a vector by the given amount.
export function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
};
export function inherits(ChildClass, BaseClass) {
    ChildClass.prototype = Object.create(BaseClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
};



