var navBar = document.querySelector(".navBar");
var mobileNav = document.querySelector(".mobileNav");
mobileNav.addEventListener('click', function(event){
    if(event.target.querySelector = '.mobileNav'){
        navBar.classList.toggle('show');
    };
});

var tabs =  document.querySelector(".tabs");
var display = document.querySelectorAll('.display');
tabs.addEventListener('click', function(event){
    var data = document.querySelector(event.target.dataset.intended);
    if (event.target.className == 'tab'){
        for(i=0; i<display.length; i++ ) {
            if (display[i] == data){
                display[i].classList.add('active');
            }else{
                display[i].classList.remove('active');
            }
        }
    }
})

var topBtn = document.querySelector(".scroll");
var height = document.body.scrollHeight;
var offSet = height/4 ;
 
height.slidup


window.addEventListener('scroll', function(event){
    var scrollPos = window.scrollY; scro
    if (scrollPos >= offSet){
        topBtn.classList.add('show');
    }else{
        topBtn.classList.remove('show');
    }
})
