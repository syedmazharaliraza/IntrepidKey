// Script for splash screen
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add("invisible")
    }, 1800)
});

// Script for generating symbols, numbers, uppercase alphabeta and small alphabets password
const empty = "";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sym = "!@#$%^&*(){}[],.;";
const num = "0123456789";

const len = document.getElementById("numberinput");
const lowcase = document.getElementById("lowercase");
const submit = document.getElementById("button");
const pass = document.getElementById("password");
const symbols = document.getElementById("symbol");
const numbers = document.getElementById("number");
const uppercase = document.getElementById("uppercase");

submit.addEventListener('click', () => {

    let inipass = empty;
    (lowcase.checked) ? inipass += lcase : "";
    (symbols.checked) ? inipass += sym : "";
    (numbers.checked) ? inipass += num : "";
    (uppercase.checked) ? inipass += ucase : "";

    pass.value = generatePassword(len.value, inipass)
});

function generatePassword(l, inipass) {
    let pas = "";
    for (let i = 0; i < l; i++) {
        pas += inipass.charAt(Math.floor(Math.random() * inipass.length));
    }
    return pas;
}

// script for copied! popup
function myFunction() {
    pass.select();
    document.execCommand("copy");
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(function () {
        popup.classList.remove("show");
    }, 1000);
}

// Script for character amount slider 
var slider = document.getElementById("slider");

slider.oninput = function () {
    len.value = slider.value;
}

// Go to Top 
$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });