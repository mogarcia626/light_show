// Get the modal
export const welcomeModal = document.getElementById("welcome-modal");

// Get the button that closes the modal
export const welcomeCloseBtn = document.getElementById("close-modal");

// When the user clicks the button, close the modal 
welcomeCloseBtn.onclick = function() {
  welcomeModal.style.display = "none";
}

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


