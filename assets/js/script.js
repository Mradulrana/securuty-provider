(() => {
    // Select HTML elements
    const navbar = document.querySelector(".navbar");
    const navbarContainer = document.querySelector(".nav-container");
    const navLogo = document.querySelector(".logo");
    // const navlogotext = document.querySelector("span.logo-text");
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    // Add Remove Classes On Scroll (Shrink Nav On Scroll)
    window.addEventListener("scroll", () => {
        if (!hamburger.classList.contains("open")) {
            if (window.pageYOffset > 100) {
                navbar.classList.add("navbar-scroll");
                navbarContainer.classList.add("nav-bar-scroll");
                navLogo.classList.add("logo-scroll");

            } else {
                navbar.classList.remove("navbar-scroll");
                navbarContainer.classList.remove("nav-bar-scroll");
                navLogo.classList.remove("logo-scroll");

            }
        }
    });

    // Handles Mobile Hamburger Menu
    const serviceBtn = document.querySelector(".service-btn")
    const dropdowncontent = document.querySelector(".dropdown-content")
    const toggleMobileNav = () => {
        navList.classList.toggle("open");
        hamburger.classList.toggle("open");
        if (window.pageYOffset < 100) {
            navbar.classList.toggle("navbar-scroll");
            navbarContainer.classList.toggle("nav-bar-scroll");
            navLogo.classList.toggle("logo-scroll");

        }
    };
serviceBtn.addEventListener("click", () => {

    dropdowncontent.classList.toggle("open");
})
    // Event Listeners
    hamburger.addEventListener("click", toggleMobileNav);
    navList.addEventListener("click", toggleMobileNav);
    serviceBtn.addEventListener("click", toggleMobileNav, false);

    // faq
//     const faqItemHead = document.querySelectorAll('.faq-item-head');

// faqItemHead.forEach((head, index) => {
//     head.addEventListener('click', () => {
//         let icon = head.querySelector('.faq-item-icon').firstElementChild;
//         if (icon.className == "fa fa-chevron-down") {
//             head.nextElementSibling.classList.add('show-para');
//             icon.className = "fa fa-chevron-up";
//         } else if (icon.className == "fa fa-chevron-up") {
//             head.nextElementSibling.classList.remove('show-para');
//             icon.className = "fa fa-chevron-down";
//         }
//     });
// });



})();