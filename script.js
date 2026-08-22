const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigation clicked:", link.textContent);
    });
});