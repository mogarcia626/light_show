import { COLORS } from '../utils'

export function colorButtonListener(
    animation,
    colorButton,
    colorsModal,
    canvasMenu ) {

    colorButton.addEventListener('click', openColorMenu)
    
    function openColorMenu() {        
        animation.launching = false
        animation.active = false   
        colorsModal.style.display="block";
        // const newCanvasMenu = canvasMenu.cloneNode(true);
        // canvasMenu.parentNode.replaceChild(newCanvasMenu, canvasMenu);

        let colorSet = new Set(animation.colorList)        
        const colorCheckBoxes = document.getElementsByClassName(`color-check`);

        const allButton = document.getElementById('all')
        allButton.addEventListener('change', checkAllColors)        
        function checkAllColors() {
            if (allButton.checked) {
                colorSet = new Set(Object.keys(COLORS))
                noneButton.checked = false;
                for (let i = 0; i < colorCheckBoxes.length; i++) {
                    colorCheckBoxes[i].checked = true;                
                }
            }
        }

        const noneButton = document.getElementById('none')
        noneButton.addEventListener('change', checkNoneColors)
        function checkNoneColors() {
            if (noneButton.checked) {
                colorSet.clear()
                animation.colorList = [];
                allButton.checked = false;
                for (let i = 0; i < colorCheckBoxes.length; i++) {
                    colorCheckBoxes[i].checked = false;                
                }
            }
        }
        
        for (let colorBox of colorCheckBoxes) {
            colorBox.addEventListener('change', checkColor)         
        }
        function checkColor() {
                if (this.checked) {
                    noneButton.checked = false
                    colorSet.add(this.value);
                } else {
                    allButton.checked = false
                    colorSet.delete(this.value);
                }
            }; 
        
        const closeColorsButton = document.getElementById('close-color-modal');
        closeColorsButton.addEventListener('click', closeColorMenu)
        
        function closeColorMenu() {
            allButton.removeEventListener('change', checkAllColors) 
            noneButton.removeEventListener('change', checkNoneColors)
            closeColorsButton.removeEventListener('click', closeColorMenu)
            for (let colorBox of colorCheckBoxes) {
                colorBox.removeEventListener('change', checkColor)         
            }
            colorsModal.style.display="none";
            animation.colorList = Array.from(colorSet)
            animation.active = true;
        }
    }
}