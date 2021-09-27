export function StopAndPauseButtonListeners(
    animation,
    startButton,
    pauseButton,
    stopButton,
    colorButton,
) {
    startButton.style.display="none";
    pauseButton.style.display="block";
    stopButton.style.display="block";
    colorButton.style.display='block'

    pauseButton.addEventListener('click', clickPause)
    stopButton.addEventListener('click', clickStop)
    
    animation.launchFireworks()
    animation.render()

    function clickStop() {
        animation.launching = false
        stopButton.removeEventListener('click', clickStop)
        pauseButton.removeEventListener('click', clickPause)
        stopButton.style.display="none";
        pauseButton.style.display="none";
        startButton.style.display="block";
        startButton.addEventListener('click', clickStart)
        function clickStart() {
            startButton.removeEventListener('click', clickStart)
            StopAndPauseButtonListeners(animation, startButton, pauseButton, stopButton, colorButton)
        }
    }

     function clickPause() {
        animation.active = false
        animation.launching = false
        pauseButton.removeEventListener('click', clickPause)
        stopButton.removeEventListener('click', clickStop)
        pauseButton.style.display="none";
        stopButton.style.display="none";
        colorButton.style.display='none';
        startButton.style.display="block";
        startButton.addEventListener('click', clickResume)
        function clickResume() {
            startButton.removeEventListener('click', clickResume)
            StopAndPauseButtonListeners(animation, startButton, pauseButton, stopButton, colorButton)
        }
    }
}
