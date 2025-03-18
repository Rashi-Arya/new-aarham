// document.addEventListener("DOMContentLoaded", () => {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector(".nav ul");

//     navToggle.addEventListener("click", () => {
//         navMenu.classList.toggle("show");
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector(".nav ul");

//     if (navToggle && navMenu) {
//         navToggle.addEventListener("click", function () {
//             navMenu.classList.toggle("active");
//         });
//     }
// // });
// document.addEventListener("DOMContentLoaded", function () {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector(".nav-menu");

//     if (navToggle && navMenu) {
//         navToggle.addEventListener("click", function (event) {
//             event.stopPropagation(); // Stop click event from bubbling up
//             navMenu.classList.toggle("active");
//         });

//         // If user clicks outside the menu, close it
//         document.addEventListener("click", function (event) {
//             if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
//                 navMenu.classList.remove("active");
//             }
//         });
// //     }
// document.addEventListener("DOMContentLoaded", function () {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector(".nav ul");

//     if (navToggle && navMenu) {
//         navToggle.addEventListener("click", function (e) {
//             e.stopPropagation(); // Prevent click event from bubbling
// //             navMenu.classList.toggle("active");
// document.addEventListener("DOMContentLoaded", function () {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector(".nav-menu");

//     navToggle.addEventListener("click", function () {
//         navMenu.classList.toggle("active"); // Class toggle कर रहा है
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    } else {
        console.error("nav-toggle या nav-menu नहीं मिला!");
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     let slider = document.querySelector(".card");
//     let items = document.querySelectorAll(".item");
//     let index = 0;

//     function nextSlide() {
//         index++;
//         if (index >= items.length) {
//             index = 0;
//         }
//         updateSlider();
//     }

//     function prevSlide() {
//         index--;
//         if (index < 0) {
//             index = items.length - 1;
//         }
//         updateSlider();
//     }

//     function updateSlider() {
//         let offset = -index * 100 + "%";
//         slider.style.transform = "translateX(" + offset + ")";
//     }

//     // Auto slider every 3 seconds
//     setInterval(nextSlide, 3000);

//     // Manual Buttons
//     documen
document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".card");
    let items = document.querySelectorAll(".item");
    let index = 0;
    let slideWidth = items[0].offsetWidth; // Image width निकालो

    function nextSlide() {
        index++;
        if (index >= items.length) {
            index = 0; // अगर लास्ट image हो गई तो वापस 0 पर आओ
        }
        updateSlider();
    }

    function updateSlider() {
        let offset = -index * slideWidth + "px";
        slider.style.transition = "transform 4s ease-in-out"; // **Smooth transition**
        slider.style.transform = `translateX(${offset})`;
    }

    // **हर 3 सेकंड रुकेगी + 1 सेकंड transition = 4 सेकंड per slide**
    setInterval(nextSlide, 4000);
});

const slider= document.querySelector(".card ");
const images=document.querySelectorAll(".item");

let Index = 0;

function showSlide(i) {

  Index=(i+images.length)%images.length;

   slider.style.transform=`translateX(${-Index*100}%)`;

}

document.querySelector(".prev").addEventListener("click",()=>{
   
    showSlide(Index-1);
});

document.querySelector(".next").addEventListener("click",()=>{
   
    showSlide(Index+1);
});

setInterval(()=>{
   
    showSlide(Index+1);
},3000);

