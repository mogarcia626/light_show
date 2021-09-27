import drawSolidBackground from "../solid_color/solid_background"

export function persistButtonListener(
    animation,
    persistButton,
) {
    persistButton.addEventListener('click', togglePersistingFireworks)
    const persistIcon = document.getElementById('persisting')
    
    function togglePersistingFireworks() {
        if (animation.clearing) {
            animation.clearing = false
            persistIcon.style.color = '#E2BB2B'
        } else {
            animation.clearing = true
            persistIcon.style.color = 'white'
        }
    }
}
