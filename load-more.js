let loadMoreBtn = document.querySelector('.load-more');
   let currentItem = 15;
   loadMoreBtn.onclick = () =>{
      let boxes = [...document.querySelectorAll('.product-list .prod-box')];
      for (var i = currentItem; i < currentItem + 15; i++) {
          boxes[i].style.display = 'inline-block';
      }
      currentItem += 15;
   }
