let slideIndex = 1;
showSlides(slideIndex);

// Next/previous 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens=[...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});


arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id==="left" ? -firstCardWidth : firstCardWidth;
  })
});

const infiniteScroll = () => {
  if(carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2*carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  } else if(Math.ceil(carousel.scrollLeft)===carousel.scrollWidth-carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
}
carousel.addEventListener("scroll", infiniteScroll);

const box = document.querySelector(".box");
const arrow = document.querySelectorAll(".wrap i");
const firstBoxTopWidth = box.querySelector(".box-top").offsetWidth;
const boxChildrens=[...box.children];

let boxTopPerView = Math.round(box.offsetWidth / firstBoxTopWidth);

boxChildrens.slice(-boxTopPerView).reverse().forEach(boxTop => {
  box.insertAdjacentHTML("afterbegin", boxTop.outerHTML);
});


arrow.forEach(arrow => {
  arrow.addEventListener("click", () => {
      box.scrollLeft += arrow.id==="left" ? -firstBoxTopWidth : firstBoxTopWidth;
  })
});

const Scrolling = () => {
  if(box.scrollLeft === 0) {
    box.classList.add("no-transition");
    box.scrollLeft = box.scrollWidth - (2*box.offsetWidth);
    box.classList.remove("no-transition");
  } else if(Math.ceil(box.scrollLeft)===box.scrollWidth-box.offsetWidth) {
    box.classList.add("no-transition");
    box.scrollLeft = box.offsetWidth;
    box.classList.remove("no-transition");
  }
}
box.addEventListener("scroll", Scrolling);