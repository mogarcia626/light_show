import { colorButtonListener } from './navigation/color_menu'
import { homeButtonListener } from './navigation/home'
import { StopAndPauseButtonListeners } from './navigation/start_stop'

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
}
export function resetColorMenu() {
    document.getElementById('all').checked = true
    document.getElementById('none').checked = false
    const colorBoxes = document.getElementsByClassName(`color-check`);
    for (let color of colorBoxes) {
        color.checked = true
    }
}

// _____ Stop / Start _________________________________________________________
export function addStopAndPauseListeners(animation) {
    StopAndPauseButtonListeners(
        animation,
        startButton(),
        pauseButton(),
        stopButton(),
        colorButton(),
    )
}