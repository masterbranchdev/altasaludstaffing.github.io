$(function() {
    $.scrollIt({
        upKey: 38,                // Tecla para desplazarse hacia arriba (por defecto: flecha arriba)
        downKey: 40,              // Tecla para desplazarse hacia abajo (por defecto: flecha abajo)
        scrollTime: 600,          // Tiempo de desplazamiento en milisegundos
        activeClass: 'active',    // Clase activa para el elemento actual
        onPageChange: null,       // Función que se ejecuta al cambiar de página
        topOffset: -100              // Desplazamiento desde la parte superior
    });
});

// RCD
// document.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
// });


function agentStaffingServices() {
    Swal.fire({
        title: "<h1><strong>Save time, cut costs, stay connected</strong></h1><hr><p class='text-white'>with outsourced call support that works</p>",

        html: `
        <div class="text-start">
         <h4>✅ <b>Dedicated Agents</b></h4> <br>
         <h4>✅ <b>Virtual Receptionists</b></h4> <br>
         <h4>✅ <b>Customer Service Representatives</b></h4> <br>
         <h4>✅ <b>24/7 Answering Service</b></h4> <br>
         </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
        background: "#000",
        customClass: {
            title: 'swal2-title-white',
            htmlContainer: 'swal2-html-white',
            popup: 'swal2-popup-dark'
        }
    });
}


function technicalStaffingServices() {
    Swal.fire({
        title: "<h1><strong>Outsource your IT, unlock your agility</strong></h1><hr><p class='text-white'>tech talent when you need it, where you need it.</p>",

        html: `
        <div class="text-start">
         <h4>✅ <b>IT Helpdesk</b></h4> <br>
         <h4>✅ <b>Software Engineers</b></h4> <br>
         <h4>✅ <b>Programmers & Scripters</b></h4> <br>
         <h4>✅ <b>Cybersecurity & Compliance</b></h4> <br>
         </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
        background: "#000",
        customClass: {
            title: 'swal2-title-white',
            htmlContainer: 'swal2-html-white',
            popup: 'swal2-popup-dark'
        }
    });
}

function digitalMediaServices() {
    Swal.fire({
        title:"<h1><strong>Save time and shine online </strong></h1><hr>" + "<p class='text-white'>outsource experienced digital media professionals and grow without limits.</p>",

        html: `
        <div class="text-start">
         <h4>✅ <b>Graphic Designers</b></h4> <br>
         <h4>✅ <b>Social Media Management</b></h4> <br>
         <h4>✅ <b>Content Creation and Management </b></h4> <br>
         <h4>✅ <b>SEO Management</b></h4> <br>
         </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
        background: "#000",
        customClass: {
            title: 'swal2-title-white',
            htmlContainer: 'swal2-html-white',
            popup: 'swal2-popup-dark'
        }
    });
}



//CARROUSEL
(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    var carousel = function() {
        $('.featured-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin:30,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
            responsive:{
                0:{
                    items:1
                },
                900:{
                    items:2
                },
                1300:{
                    items:3
                }
            }
        });

    };
    carousel();

})(jQuery);


// image in modal
function showModal(src) {
    document.getElementById('modalImage').src = src;
}

//CARROUSEL


