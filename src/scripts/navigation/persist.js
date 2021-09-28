import drawSolidBackground from "../solid_color/solid_background"

export function persistButtonListener(
    animation,
    persistButton,
) {
    persistButton.addEventListener('click', togglePersistingFireworks)
    const persistIcon = document.getElementById('persisting')
    const [trail, smoke] = [animation.trailLength, animation.smokeLength]
    function togglePersistingFireworks() {
        if (animation.clearing) {
            animation.clearing = false
            animation.trailLength = 0;
            animation.smokeLength = 0;
            persistIcon.style.color = '#E2BB2B'
        } else {
            [animation.trailLength, animation.smokeLength] = [trail, smoke]
            animation.clearing = true
            persistIcon.style.color = 'white'
        }
    }
}
