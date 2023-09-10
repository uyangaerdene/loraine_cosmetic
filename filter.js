
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn div");
    const productBoxes = document.querySelectorAll(".prod-box");
  
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const filter = button.getAttribute("data-filter");
  
        productBoxes.forEach(function (box) {
          if (filter === "all" || box.classList.contains(filter)) {
            box.style.display = "block";
          } else {
            box.style.display = "none";
          }
        });
      });
    });
  });
  