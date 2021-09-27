export function homeButtonListener(
    animation,
    homeButton,
    welcomeModal,
    canvasMenu ) {
        homeButton.addEventListener('click', returnToHome)
        
        function returnToHome() {    
            animation.launching = false  

            welcomeModal.style.display="block";

            const newCanvas = animation.canvas.cloneNode(true);
            animation.canvas.parentNode.replaceChild(newCanvas, animation.canvas);

            const newCanvasMenu = canvasMenu.cloneNode(true);
            canvasMenu.parentNode.replaceChild(newCanvasMenu, canvasMenu);
            canvasMenu.style.display="none";
        }
}


// homeButton.removeEventListener('click', returnToHome)
// colorButton.removeEventListener('click', openColorMenu)
// pauseButton.removeEventListener('click', clickPause)
// stopButton.removeEventListener('click', clickStop)
// startButton.removeEventListener('click', clickStart)
// startButton.removeEventListener('click', clickResume)