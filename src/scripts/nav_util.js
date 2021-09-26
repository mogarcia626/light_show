import { COLORS } from './utils'
    
export function returnToHome(bg) {
    const homeButton = document.getElementById('open-welcome-modal');
    homeButton.addEventListener('click', function() {    
        bg.closed = true    
        document.getElementById("welcome-modal").style.display="block";
        document.getElementById('canvas-menu').style.display="none";
    }) 
}

export function openColorMenu(bg) {
    
    const colorButton = document.getElementById('open-color-modal');
    colorButton.addEventListener('click', function() {        
        bg.active = false      
        document.getElementById("colors-modal").style.display="block";
        document.getElementById('canvas-menu').style.display="none"; 

        let colorSet = new Set(bg.colorList)        
        const colorCheckBoxes = document.getElementsByClassName(`color-check`);

        const allButton = document.getElementById('all')
        allButton.addEventListener('change', () => {
            if (allButton.checked) {
                colorSet = new Set(Object.keys(COLORS))
                bg.colorList = Object.keys(COLORS)
                noneButton.checked = false;
                for (let i = 0; i < colorCheckBoxes.length; i++) {
                    colorCheckBoxes[i].checked = true;                
                }
            }
        })

        const noneButton = document.getElementById('none')
        noneButton.addEventListener('change', () => {
            if (noneButton.checked) {
                colorSet.clear()
                bg.colorList = [];
                allButton.checked = false;
                for (let i = 0; i < colorCheckBoxes.length; i++) {
                    colorCheckBoxes[i].checked = false;                
                }
            }
        })
        
        for (let i = 0; i < colorCheckBoxes.length; i++) {
            colorCheckBoxes[i].addEventListener('change', function() {
                if (this.checked) {
                    noneButton.checked = false
                    colorSet.add(this.value);
                    bg.colorList = Array.from(colorSet)
                } else {
                    allButton.checked = false
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

export function play(bg) {
    const playButton = document.getElementById("play")
    playButton.style.display="none";

    const pauseButton = document.getElementById('pause');
    pauseButton.style.display="block";
    pauseButton.addEventListener('click', clickPause)
    
    bg.render()

    function clickPause(e) {
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
    
    function clickPlay(e) {
        bg.active = true
        playButton.removeEventListener('click', clickPlay)
        play(bg)
    }
}


