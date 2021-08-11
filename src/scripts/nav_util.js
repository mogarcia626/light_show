import { COLORS } from './utils'
    
export function returnToHome(bg) {
    const homeButton = document.getElementById('back-to-main');
    homeButton.addEventListener('click', function() { 
        bg.closed = true    
        document.getElementById("welcome-modal").style.display="block";
        document.getElementById('canvas-menu').style.display="none";    
    }) 
}

export function openColorMenu(bg) {
    
    const colorButton = document.getElementById('select-colors');
    colorButton.addEventListener('click', function() {        
        bg.active = false      
        document.getElementById("colors-modal").style.display="block";
        document.getElementById('canvas-menu').style.display="none"; 
        
        const colorCheckBoxes = document.getElementsByClassName(`color-check`);
        const colorSet = new Set(bg.colorList)

        for (let i = 0; i < colorCheckBoxes.length; i++) {
            colorCheckBoxes[i].addEventListener('change', function() {
                if (this.checked) {
                    colorSet.add(this.value);
                    bg.colorList = Array.from(colorSet)
                } else {
                    colorSet.delete(this.value);
                    bg.colorList = Array.from(colorSet)
                }
            }); 
        }
        
        document.getElementById('close-color-modal').addEventListener('click', () =>{
            document.getElementById("colors-modal").style.display="none";
            document.getElementById("canvas-menu").style.display="flex";
            bg.active = true;
        })
    }) 
}