var iicon = $(".navbar-nav .nav-item i");
var mobiicon = $(".dropdown .dropbtn i");
var mobicon = $("#mob-menu .navbar i");
var lg_menu = $("#lg-menu");
var mob_menu = $("#mob-menu");
if ($(window).width() < 992) {
    iicon.removeClass("fas fa-moon fa-2x", 2000);
    mobicon.addClass("fas fa-moon fa-2x", 2000);
    mobiicon.removeClass(" fa-moon fa-2x", 2000);


    // lg_menu.addClass("d-none");
    // mob_menu.removeClass("d-none");





} else {

    iicon.addClass("fas fa-moon fa-2x", 2000);
    mobicon.removeClass("fas fa-moon fa-2x", 2000);
    mobiicon.removeClass(" fa-moon fa-2x", 2000);

    // lg_menu.removeClass("d-none");
    // mob_menu.addClass("d-none");

}

// <!-------------navbar menu---------------------------------------------->

var navbar = $(".navbar");
var sohel = $(".sohel");
var mob_nav = $(".Mobile_navbar");
$(document).ready(function() {
    $(".sohel").add.attr
    $(function() {
        navbar.addClass("h_80px", 2000);
        // $(".nav-item a").removeClass("text-white");

        $(window).on("scroll", function() {

            if ($(window).scrollTop() > 50) {

                // $(".nav-item a").removeClass("text-white");

                $(".main_nav").addClass("active1");
                navbar.addClass("h_50px");
                navbar.removeClass("h_80px");

                navbar.removeClass("px-1");
                navbar.removeClass("py-3");

                mob_nav.addClass("h_50px");
                mob_nav.removeClass("h_80px");
                $(".main_nav").css('box-shadow', '0px 1px 20px #9099ff');
                // $(".navbar a, .navbar_brand").removeClass("text-white", 2000);
                // $(".navbar a, .navbar_brand").addClass("text-white", 2000);
                $(".navbar_brand span:nth-child(4)").css({

                    display: "none",
                    transition: ".7s"
                });
                $(".navbar_brand span:nth-child(2)").css({
                    display: "none",
                    transition: ".7s"
                });




                //$(".sohel").removeClass("sohel1");

                //$(".sohel").addClass("sohel1");



                $(".navbar_brand span:nth-child(1)").css({
                    fontSize: "50px",
                    transition: ".7s"
                }, "slow");
                $(".navbar_brand span:nth-child(3)").css({
                    fontSize: "50px",
                    transition: ".7s"
                }, "slow");



            } else {

                //$(".sohel").addClass("sohel1");
                //$(".sohel").removeClass("sohel1");



                //remove the background property so it comes transparent again (defined in your css)
                $(".main_nav").removeClass("active1");
                // $(".nav-item a").removeClass("text-white");

                navbar.addClass("px-1");
                navbar.addClass("py-3");


                navbar.removeClass("h_50px");
                navbar.addClass("h_80px", 2000);
                mob_nav.removeClass("h_50px");
                mob_nav.addClass("h_80px", 2000);
                $(".main_nav").css('box-shadow', 'none');
                // $(".navbar a, .navbar_brand").addClass("text-white", 2000);
                // $(".navbar a, .navbar_brand").removeClass("text-white", 2000);
                $(".navbar_brand span:nth-child(2)").css({
                    display: "block",
                    transition: ".7s"
                }, "slow");
                $(".navbar_brand span:nth-child(4)").css({
                    display: "block",
                    transition: ".7s"
                }, "slow");



                $(".navbar_brand span:nth-child(1)").css({
                    fontSize: "25px",
                    // transform: 'translate(0px, 0px)',
                    // opacity: '1',
                    transition: ".7s"
                }, "slow");
                $(".navbar_brand span:nth-child(3)").css({
                    fontSize: "25px",
                    // transform: 'translate(0px, 0px)',
                    // opacity: '1',
                    transition: ".7s"
                }, "slow");



                // $(".malek::first-letter").css({
                //     transform: 'translate(0px, 0px)',
                //     opacity: '1',
                //     transition: ".7s"
                // }, "slow");



            }

        });
    });

});
// <!-------------navbar menu END---------------------------------------------->
// $(document).ready(function() {
//     const themeStylesheet = document.getElementById('theme');
//     var sun = document.getElementsByClassName("sun");
//     var moon = document.getElementsByClassName("moon");
//     const themeToggle = document.getElementById('theme-toggle');

//     themeToggle.addEventListener('click', () => {
//         // if it's light -> go dark
//         if (themeStylesheet.href.includes('light')) {
//             themeStylesheet.href = 'darkmode.css';
//             // themeToggle.innerText = 'Light';
//             $("#theme-toggle i").removeClass("far fa-moon moon");
//             $("#theme-toggle i").addClass("fas fa-sun sun");




//         } else {
//             // if it's dark -> go light
//             themeStylesheet.href = 'lightmode.css';
//             // themeToggle.innerText = 'Dark';
//             $("#theme-toggle i").removeClass("fas fa-sun sun");
//             $("#theme-toggle i").addClass("far fa-moon moon");




//         }
//     })


// });
// <!-----------------small sccreen mobile menu show hide ------------------------------------>
$('.menu, .overlay').click(function() {
    $('.menu').toggleClass('clicked');

    $('#nav').toggleClass('show');

});
// <!-- ---------new dark light mode script------------------------------------------------------- -->

// const darkBtn = document.querySelector('.fas');

const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
}

// darkBtn.addEventListener('click', () => {
//     // Get the value of the "dark" item from the local storage on every click
//     setDarkMode = localStorage.getItem('dark');

//     if (setDarkMode !== "on") {
//         darkMode();
//         // Set the value of the itwm to "on" when dark mode is on
//         setDarkMode = localStorage.setItem('dark', 'on');
//     } else {
//         darkMode();
//         // Set the value of the item to  "null" when dark mode if off
//         setDarkMode = localStorage.setItem('dark', null);
//     }
// });

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if (setDarkMode === 'on') {
    darkMode();
}

// ---------tooltip-----------------------------------------------
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
// ---------video light box---------------------------------------------------
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
// ---------------new mobile menu-------------------------------------
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    // ----------go to top -------------------------------------------------------------------------
    //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}