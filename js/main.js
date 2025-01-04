let passwordBox = document.querySelector('.passwordBox');
const copyPass = document.querySelector('.copyPass');
const inputSlider = document.querySelector('.inputSlider');
const generate = document.querySelector('#reloadBtn');
const upperCase = document.querySelector('#upperCase');
const lowerCase = document.querySelector('#lowerCase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('.symbols');
const enableAudio = false;
const clearHistory__text = document.querySelector('.clearHistory__text');
const sliderValue = document.querySelector('.sliderValue');
const sliderContainer = document.querySelector('.sliderContainer');
const sliderWidth = sliderContainer.offsetWidth;

inputSlider.addEventListener('input', () => {
    let percentage = (inputSlider.value - inputSlider.min) / (inputSlider.max - inputSlider.min);
    console.log(percentage);
    console.log(sliderWidth);
    sliderValue.textContent = inputSlider.value;
    sliderValue.style.left = `${percentage * (sliderWidth - 21)}px`
});


let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let specialChars = "!@#$%^&*";

generate.addEventListener('click', ()=>{
    passwordBox.value = generatedPassword();
});

function generatedPassword(){
    let genPassword = "";
    genPassword = Math.random()*2;
    return genPassword;
}


