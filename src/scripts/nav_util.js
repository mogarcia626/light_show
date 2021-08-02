import { COLORS } from './utils'

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

export function openColorMenu(launch, bg, ctx, w, h, intervalArray, excludedColors = new Set()) {
    
    const colorButton = document.getElementById('select-colors');
    colorButton.addEventListener('click', function() {  
        intervalArray.forEach(interval => {
            clearInterval(interval)
        });     
        document.getElementById("colors-modal").style.display="block";
        document.getElementById('canvas-menu').style.display="none"; 
        
        const colorCheckBoxes = document.getElementsByClassName(`color-check`);

        for (let i = 0; i < colorCheckBoxes.length; i++) {
            colorCheckBoxes[i].addEventListener('change', function() {
                if (this.checked) {
                    excludedColors.delete(this.value);
                    console.log(excludedColors)
                } else {
                    excludedColors.add(this.value);
                    console.log(excludedColors)
                }
            }); 
        }
        
        document.getElementById('close-color-modal').addEventListener('click', () =>{
            document.getElementById("colors-modal").style.display="none";
            document.getElementById("canvas-menu").style.display="flex";
            launch(bg, ctx, w, h, excludedColors);
        })
    }) 
}