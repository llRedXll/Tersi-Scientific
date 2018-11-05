// $(function() {
//     var divs = $('div[id^="slider-"]').hide(),
//     i = 0;

// (function cycle() { 
//     divs.eq(i).fadeIn(500)
//               .delay(5000)
//               .fadeOut(500, cycle);

//     i = ++i % divs.length; // increment i, 
//                            //   and reset to 0 when it equals divs.length
// })();
// });
// header slider images //
const bgImages = [
    "assets/images/stent-header-bg.jpg",
    "assets/images/header-bg.jpg"
]
const node = document.getElementById("header");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
        setTimeout(() => {
            container.style.backgroundImage = `url(${image})`
        }, step * (index + 1))
    ))
    setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(bgImages, node, 6000)

// Popup Test 2 //

var scrollTop = '';
var newHeight = '100';

$(window).bind('scroll', function() {
   scrollTop = $( window ).scrollTop();
   newHeight = scrollTop + 100;
});

$('.popup-trigger').click(function(e) {
   e.stopPropagation();
 if(jQuery(window).width() < 767) {
   $(this).after( $(this).nextAll('.popup:first') );
   $(this).nextAll('.popup:first').show().addClass('popup-mobile').css('top', 0);
   $('html, body').animate({
        scrollTop: $(this).nextAll('.popup:first').offset().top
    }, 500);
 } else {
     $('.popup').hide();
     $(this).nextAll('.popup:first').removeClass('popup-mobile').css('top', newHeight).toggle();
 };
});

$('html').click(function() {
 $('.popup').hide();
});

$('.popup-btn-close').click(function(e){
  $(this).parent().hide();
});

$('.popup').click(function(e){
  e.stopPropagation();
});



//////////////////Old Pop Up Script////////////////////

// // Get the modal
// var modal = document.getElementById('viu-pop');
// // Get the button that opens the modal
// var btn = document.getElementById("viu-rm");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

    

