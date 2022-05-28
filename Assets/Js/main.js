
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

document.addEventListener('click',e=>{
    let handle
    if(e.target.matches(".handle")) {
        handle=e.target
    }
    else{
        handle=e.target.closest(".handle")
    }
    if(handle != null){
        onhandleclick(handle)
    }
})

function onhandleclick(handle){
    const slider=handle.closest(".container").querySelector(".slider")
    const sliderindex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    if(handle.classList.contains("left-handle")){
        slider.style.setProperty("--slider-index", sliderindex-1)
    }
    if(handle.classList.contains("right-handle")){
        slider.style.setProperty("--slider-index", sliderindex+1)
    }
}

//countdown BY JAI

const countdown=()=>{
    const countDate= new Date('August 15, 2022 00:00:00').getTime();
    const now=new Date().getTime();
    const gap=countDate-now;

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const textday=Math.floor(gap/day);
    const texthour=Math.floor((gap%day)/hour);
    const textminute=Math.floor((gap%hour)/minute);
    const textsecond=Math.floor((gap%minute)/second);
    
    document.querySelector('.day').innerText=textday;
    document.querySelector('.hour').innerText=texthour;
    document.querySelector('.minute').innerText=textminute;
    document.querySelector('.second').innerText=textsecond;
};

setInterval(countdown,1000);

// faq js by arjun

const items = document.querySelectorAll('.faqmain button');

function togglemain() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', togglemain));

//regex for input field BY JAI
let name1=document.getElementById('form-name');
let regno=document.getElementById('form-reg');
let number=document.getElementById('form-mobile');
let email=document.getElementById('form-email');
let discord=document.getElementById('form-discord');

let span1=document.getElementsByClassName('span-name');
let span2=document.getElementsByClassName('span-reg');
let span3=document.getElementsByClassName('span-mobile');
let span4=document.getElementsByClassName('span-email');
let span5=document.getElementsByClassName('span-discord');


name1.onkeydown=function(){
    const regex=/^([a-zA-Z ]){2,30}$/;
    if(regex.test(name1.value)){
        span1[0].innerText="Your name is valid";
        span1[0].style.color='lime';
    }
    else{
        span1[0].innerText="Your name is Invalid";
        span1[0].style.color='red';
    }
}

regno.onkeydown=function(){
    const regexr =/[12][0129][A-Z]{3}[0-9]{4}/;
    if(regexr.test(regno.value)){
        span2[0].innerText="Your Reg no is valid";
        span2[0].style.color='lime';
    }
    else{
        span2[0].innerText="Your Reg no is Invalid";
        span2[0].style.color='red';
    }
}

number.onkeydown=function(){
    const regexn =/^[0-9]{10}$/;
    if(regexn.test(number.value)){
        span3[0].innerText="Your number is valid";
        span3[0].style.color='lime';
    }
    else{
        span3[0].innerText="Your number is Invalid";
        span3[0].style.color='red';
    }
}

email.onkeydown=function(){
    const regex=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regexo=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    if(regex.test(email.value) || regexo.test(email.value)){
        span4[0].innerText="Your email is valid";
        span4[0].style.color='lime';
    }
    else{
        span4[0].innerText="Your email is Invalid";
        span4[0].style.color='red';
    }
}

discord.onkeydown=function(){
    const regexd =/^((.+?)#\d{4})/;
    if(regexd.test(discord.value)){
        span5[0].innerText="Your discord ID is valid";
        span5[0].style.color='lime';
    }
    else{
        span5[0].innerText="Your discord ID is Invalid";
        span5[0].style.color='red';
    }
}