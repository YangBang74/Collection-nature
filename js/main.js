const swiper = new Swiper('.swiper', {
    slidesPerVies: 4,
    loop: true,
    pagination: {        
        el: '.swiper-pagination',
        type: 'bullets',
    },  
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      769: {
        pagination: {
          type: 'fraction',
          click: 'on',
        },
      }
    }
});



const nameInput = document.getElementById("name");
const errorText = document.getElementById("error-text");

console.log(errorText);

nameInput.addEventListener("input", () => {
  if (/^[a-zA-Za-яА-ЯёЁ]*$/.test(nameInput.value))
    {nameInput.classList.remove("error");
    errorText.style.display = "none";}
  else {
    nameInput.classList.add("error");
    errorText.style.display = "block";
  }
})


const icon = document.getElementById("search-icon");
const search = document.getElementById("search");

icon.addEventListener("click", () => {
  search.classList.toggle('active');
})