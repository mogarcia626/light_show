import { colorButtonListener } from './navigation/color_menu'
import { homeButtonListener } from './navigation/home'

function welcomeModal() { return document.getElementById("welcome-modal") }
function colorsModal() { return document.getElementById("colors-modal") }

function canvasMenu() { return document.getElementById('canvas-menu') }

function homeButton() { return document.getElementById('open-welcome-modal') }
function colorButton() { return document.getElementById('open-color-modal') }
function pauseButton() { return document.getElementById('pause') }
function stopButton() { return document.getElementById('stop') }
function startButton() { return document.getElementById('start') }

// _____HOME MENU_________________________________________________________
export function addHomeListener(animation) {
   homeButtonListener(
       animation, 
       homeButton(),
       welcomeModal(),
       canvasMenu()
    )
}

// _____COLOR MENU_________________________________________________________
export function addColorListener(animation) {
    colorButtonListener(
        animation,
        colorButton(),
        colorsModal(),
        canvasMenu()
    )
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
        
        const closeColorsButton = document.getElementById('close-color-modal');
        closeColorsButton.addEventListener('click', closeColorMenu)
        
        function closeColorMenu() {
            allButton.removeEventListener('change', checkAllColors) 
            noneButton.removeEventListener('change', checkNoneColors)
            closeColorsButton.removeEventListener('click', closeColorMenu)
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


// _____ Stop / Start _________________________________________________________
export function stopButtonListener(animation) {
    const startButton = document.getElementById("start")
    startButton.style.display="none";

    const pauseButton = document.getElementById('pause');
    pauseButton.style.display="block";
    pauseButton.addEventListener('click', clickPause)

    const stopButton = document.getElementById('stop');
    stopButton.style.display="block";
    stopButton.addEventListener('click', clickStop)
    
    animation.launchFireworks()
    animation.render()

    function clickStop() {
        animation.launching = false

        stopButton.removeEventListener('click', clickStop)
        stopButton.style.display="none";  

        pauseButton.removeEventListener('click', clickPause)
        pauseButton.style.display="none";

        startButton.style.display="block";
        startListener(animation)
    }

     function clickPause() {
        animation.active = false
        pauseButton.removeEventListener('click', clickPause)
        pauseButton.style.display="none";
        stopButton.removeEventListener('click', clickStop)
        stopButton.style.display="none";
        startButton.style.display="block";
        resumeListener(animation)
    }
}

export function startListener(animation) {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', clickStart)
    
    function clickStart() {
        startButton.removeEventListener('click', clickStart)
        stopButtonListener(animation)
    }
}

export function resumeListener(animation) {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', clickResume)
    
    function clickResume() {
        startButton.removeEventListener('click', clickResume)
        animation.active = true
    }
}

// _____ Pause / Play _________________________________________________________

// export function play(bg) {
//     const playButton = document.getElementById("play")
//     playButton.style.display="none";

//     const pauseButton = document.getElementById('pause');
//     pauseButton.style.display="block";
//     pauseButton.addEventListener('click', clickPause)
    
//     bg.render()

//     function clickPause() {
//         bg.active = false
//         pauseButton.removeEventListener('click', clickPause)
//         pauseButton.style.display="none";
//         playButton.style.display="block";
//         pause(bg)
//     }
// }

// export function pause(bg) {
//     const playButton = document.getElementById('play');
//     playButton.addEventListener('click', clickPlay)
    
//     function clickPlay() {
//         bg.active = true
//         playButton.removeEventListener('click', clickPlay)
//         play(bg)
//     }
// }