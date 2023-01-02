var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        // nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



var sliderImg=document.querySelector('.slider-img')
var images=['firstShoes.jpg','firstShoes.jpg','firstShoes.jpg']
var i=0;
function GetStarted(){
  if(JSON.parse(localStorage.getItem('userInfo'))){
    window.location.href='/welcome.html'
  }else{
     next();
  }
}

function next(){
    swiper.slideNext();
}

function setImg(){
    return sliderImg.setAttribute("src","assets/images/"+images[i])
}

let swipper=document.querySelector('.swiper-slide');
let userInfo=localStorage.getItem('userInfo');
if(userInfo){
    window.location.href='/index.html'
}else{
    localStorage.setItem('firstTime','userLogin');
}



