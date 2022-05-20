const navslide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.menu');
    const menu=document.querySelectorAll('.menu li');
    //toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        //animate links
    menu.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation='';
        }
        else{
            link.style.animation=`menuFade 0.5s ease forwards ${index/7+0.5}s`;
        }
        });
        burger.classList.toggle('toggle');
    });
    
}

navslide(); 

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle
})
