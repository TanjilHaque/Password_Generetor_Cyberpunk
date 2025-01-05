let passwordBox = document.querySelector('.passwordBox');
const copyPass = document.querySelector('.copyPass');
const inputSlider = document.querySelector('.inputSlider');
const generate = document.querySelector('#reloadBtn');
const upperCase = document.querySelector('#upperCase');
const lowerCase = document.querySelector('#lowerCase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const enableAudio = false;
const clearHistory__text = document.querySelector('.clearHistory__text');
const sliderValue = document.querySelector('.sliderValue');
const sliderContainer = document.querySelector('.sliderContainer');
const sliderWidth = sliderContainer.offsetWidth;
const historyContainer = document.querySelector('.historyContainer');

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

generate.addEventListener('click', () => {
    passwordBox.value = generatedPassword();
});
let i = 0;
let btnC = [];
let passwordCollection = [];

window.onload = () => {
    for (let j = 1; j <= localStorage.length / 2; j++) {
        // let copyAfter = `historyCopyBtn${j}`;
        // historyContainer.innerHTML += `<div class="historyContainerElements">
        //                                     <div class="elements_info">
        //                                          <h4>${localStorage[`pass${j}`]}</h4>
        //                                          <p>${localStorage[`date${j}`]}</p>
        //                                     </div>
        //                                      <button id = "historyCopyBtn${i}" onclick = "copyHistoryAfterReset(copyAfter)">COPY</button>
        //                                 </div>`;
        const historyContainerElements = document.createElement('div');
        historyContainerElements.className = 'historyContainerElements';

        const elements_info = document.createElement('div');
        elements_info.className = 'elements_info';

        let elementsInfo__password = document.createElement('h4');
        elementsInfo__password.id = `elementsInfo__password${j}`;
        elementsInfo__password.innerText = localStorage[`pass${j}`];

        let elementsInfo__date = document.createElement('p');
        elementsInfo__date.className = 'elementsInfo__date';
        elementsInfo__date.innerText = localStorage[`date${j}`];

        const passwordCopyBtn = document.createElement('button');
        passwordCopyBtn.className = 'passwordCopyBtn';
        passwordCopyBtn.innerText = 'COPY';
        passwordCopyBtn.onclick = () => {
            copyHistoryPassword(elementsInfo__password.id);
        }

        historyContainerElements.appendChild(elements_info);
        historyContainerElements.appendChild(passwordCopyBtn);
        elements_info.appendChild(elementsInfo__password);
        elements_info.appendChild(elementsInfo__date);
        historyContainer.appendChild(historyContainerElements);
       
    }
}

copyPass.addEventListener('click', savePassword)  // save passowrd

function savePassword() {
    if (passwordBox.value !== "") {
        i++;
        const currentDate = new Date();

        const historyContainerElements = document.createElement('div');
        historyContainerElements.className = 'historyContainerElements';

        const elements_info = document.createElement('div');
        elements_info.className = 'elements_info';

        const elementsInfo__password = document.createElement('h4');
        elementsInfo__password.id = `elementsInfo__password${i}`;

        const elementsInfo__date = document.createElement('p');
        elementsInfo__date.className = 'elementsInfo__date';

        const passwordCopyBtn = document.createElement('button');
        passwordCopyBtn.className = 'passwordCopyBtn';
        passwordCopyBtn.innerText = 'COPY';
        passwordCopyBtn.onclick = () => {
            copyHistoryPassword(elementsInfo__password.id);
        }

        historyContainerElements.appendChild(elements_info);
        historyContainerElements.appendChild(passwordCopyBtn);
        elements_info.appendChild(elementsInfo__password);
        elements_info.appendChild(elementsInfo__date);
        historyContainer.appendChild(historyContainerElements);
        elementsInfo__password.innerText = passwordBox.value;
        elementsInfo__date.innerText = currentDate.toString();
        // historyContainer.innerHTML += `  <div class="historyContainerElements">
        //                                     <div class="elements_info">
        //                                         <h4>${passwordBox.value}</h4>
        //                                         <p>${currentDate.toString()}</p>
        //                                     </div>
        //                                     <button id = "historyCopyBtn${i}" onclick = "copyHistoryPassword()"><i class="fa-solid fa-clone"></i></button>
        //                                 </div>`

        localStorage.setItem(`pass${i}`, passwordBox.value);
        localStorage.setItem(`date${i}`, currentDate.toString());
        localStorage.getItem(`pass${i}`);
        localStorage.getItem(`date${i}`);
        console.log(localStorage);
        console.log(localStorage.length);
        console.log(localStorage[`pass1`]);



    }
}

function copyHistoryPassword(pass) {
    const textElement = document.getElementById(pass);
    console.log(textElement);
    const textToCopy = textElement.innerHTML;
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
}

// function copyHistoryAfterReset(passId) {
//     const copiedElement = document.getElementById(passId);
//     console.log(copiedElement);
//     const copiedText = copiedElement.innerHTML;
//     console.log(copiedText);
//     navigator.clipboard.writeText(copiedText);
// }

clearHistory__text.addEventListener('click', function () {
    historyContainer.innerHTML = "";
    localStorage.clear();
});


function generatedPassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? numberChars : "";
    allChars += symbols.checked ? specialChars : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}


