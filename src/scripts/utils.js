export function randInt(num) {
    return Math.floor(Math.random() * num)
}

export function rand(num = 1) {
    return Math.random() * num
}

//__________________________________________________________________________
// vector manipulation functions
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

// Scale the length of a vector by the given amount.
export function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
};
//end_________________________________________________________________________


export const COLORS = {
    blue:['#3340DB', '#504DF4', '#539DB3', '#39657E'],
    pink:['#DE5BF8', '#FC7F81', '#ff007f', '#ff1493'],
    yellow: ['#ffff00', '#e2bb2b', '#b69835'],
    green: ['#6e9b81', '#2b583d', 'green', '#adff2f'],
    red: ['#C63347', '#FA5348', '#F75781', '#C11E4B'],
    purple: ['#A76BFE', '#792BB2', '#E365E4'],
    orange: ['#F28E63', '#F9AE9B', '#B74F2B', '#9c805b', '#956548'], 
    white: ['#C0C0C0', '#FFFAFA', '#FFFAFA'],
    black: ['black', '#696969']
}

export function establishColorList() {
    return Object.keys(COLORS)
}

export function selectRandomColor(colors) {
    const colorKey = colors[randInt(colors.length)]
    return COLORS[colorKey][randInt(COLORS[colorKey].length)]
}

//______________________________________________________________
// Node manipulation for fireworks node list
export function joinNodes(node1, node2) {
    node1.next = node2
    node2.prev = node1
}

export function replaceNode(oldNode, newNode) {
    const prev = oldNode.prev
    const next = oldNode.next

    if (prev) prev.next = newNode
    newNode.prev = prev
    
    if (next) next.prev = newNode
    newNode.next = next
}

export function removeNode(node) {
    const prev = node.prev
    const next = node.next
    if (next) next.prev = prev
    if (prev) prev.next = next
}
// end_________________________________________________________
