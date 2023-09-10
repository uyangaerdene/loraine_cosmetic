document.addEventListener("DOMContentLoaded", function () {
    const brandLinks = document.querySelectorAll(".brand-filter");
    const productBoxes = document.querySelectorAll(".prod-box");

    brandLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const brand = link.getAttribute("data-brand");

            productBoxes.forEach(function (box) {
                if (box.getAttribute("data-brand") === brand || brand === "all") {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });
});