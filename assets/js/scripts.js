// header slider images //
// const bgImages = [
//     "assets/images/stent-header-bg.jpg",
//     "assets/images/header-bg.jpg",
//     "assets/images/charlie-header-bg.jpg"
// ]
// const node = document.getElementById("header");

// const cycleImages = (images, container, step) => {
//     images.forEach((image, index) => (
//         setTimeout(() => {
//             container.style.backgroundImage = `url(${image})`
//         }, step * (index + 1))
//     ))
//     setTimeout(() => cycleImages(images, container, step), step * images.length)
// }

// cycleImages(bgImages, node, 6000)

////////////////// Pop Up Script ////////////////////

var modal = document.getElementById('viu-pop'); // Get the modal
var btn = document.getElementById("viu-rm"); // Get the button that opens the modal
var span = document.getElementById("close1"); // Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} //end of first modal

var modal2 = document.getElementById('iceCream-pop'); // Get the modal
var btn2 = document.getElementById('iceCream-rm'); // Get the button that opens the modal
var span2 = document.getElementById('close2'); // Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btn2.onclick = function () {
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
} //end of second modal

var modal3 = document.getElementById('pouch-pop'); // Get the modal
var btn3 = document.getElementById('pouch-rm'); // Get the button that opens the modal
var span3 = document.getElementById('close3'); // Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btn3.onclick = function () {
    modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
    modal3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
} //end of third modal