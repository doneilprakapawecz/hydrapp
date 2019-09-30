"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

const key = new Date().toISOString().slice(0, 10) ;
console.log(key);

const dzisiaj=document.querySelector('.header--js');
dzisiaj.innerHTML=key;

const button_1=document.querySelector('.button-1--js');
button_1.addEventListener("click",(e)=>{
 
 if(localStorage.getItem(key))
  {
    number.innerHTML=localStorage.getItem(key)*1+1;
    localStorage.setItem(key,number.innerHTML);
  }
  else
  {
    localStorage.setItem(key,'1');
    number.innerHTML=1;
  }
});
const button_2=document.querySelector('.button-2--js');
button_2.addEventListener("click",(e)=>{
  if(localStorage.getItem(key)&&localStorage.getItem(key)*1>0)
  {
    number.innerHTML=localStorage.getItem(key)*1-1;
    localStorage.setItem(key,number.innerHTML);
  }
  else
  {
    number.innerHTML=0;
  }
});
const number=document.querySelector('.number--js');
if(localStorage.getItem(key))number.innerHTML=localStorage.getItem(key);

//-----------------------------------------statystyka---------------------------------------------

//------------------------------------------------------------------------------------------------
