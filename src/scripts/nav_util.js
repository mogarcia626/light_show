import { COLORS } from './utils'

// _____HOME MENU_________________________________________________________
export function homeButtonListener(bg) {
    const homeButton = document.getElementById('open-welcome-modal');
    homeButton.addEventListener('click', returnToHome)
    
    function returnToHome() {    
        bg.closed = true    
        document.getElementById("welcome-modal").style.display="block";
        document.getElementById('canvas-menu').style.display="none";
        homeButton.removeEventListener('click', returnToHome)
        document.getElementById("play").removeEventListener('click', clickPlay)
        document.getElementById("pause").removeEventListener('click', clickPause)
    }
}

// _____COLOR MENU_________________________________________________________
export function colorButtonListener(bg) {
    
    const colorButton = document.getElementById('open-color-modal');
    colorButton.addEventListener('click', openColorMenu)
    
    function openColorMenu() {        
        bg.launching = false      
        document.getElementById("colors-modal").style.display="block";
        // document.getElementById('canvas-menu').style.display="none"; 

        let colorSet = new Set(bg.colorList)        
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
                bg.colorList = [];
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
        
        const resumeButton = document.getElementById('close-color-modal');
        resumeButton.addEventListener('click', closeColorMenu)
        
        function closeColorMenu() {
            allButton.removeEventListener('change', checkAllColors) 
            noneButton.removeEventListener('change', checkNoneColors)
            resumeButton.removeEventListener('click', closeColorMenu)
            for (let colorBox of colorCheckBoxes) {
                colorBox.removeEventListener('change', checkColor)         
            }
            document.getElementById("colors-modal").style.display="none";
            document.getElementById("canvas-menu").style.display="flex";
            bg.colorList = Array.from(colorSet)
            bg.launchFireworks();
        }
    }
}

export function play(bg) {
    const playButton = document.getElementById("play")
    playButton.style.display="none";

    const pauseButton = document.getElementById('pause');
    pauseButton.style.display="block";
    pauseButton.addEventListener('click', clickPause)
    
    bg.render()

    function clickPause() {
        bg.active = false
        pauseButton.removeEventListener('click', clickPause)
        pauseButton.style.display="none";
        playButton.style.display="block";
        pause(bg)
    }
}

export function pause(bg) {
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', clickPlay)
    
    function clickPlay() {
        bg.active = true
        playButton.removeEventListener('click', clickPlay)
        play(bg)
    }
}


