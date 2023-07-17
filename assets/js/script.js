let anotherVisible = false;
let visibleNow = null;
let anotherRed = false;
let redNow = null;

function chosenHero(hero) {
    isAnotherVisible(anotherVisible, visibleNow);
    let display = document.getElementById(hero).style.display;
    if (display == "none") {
        document.getElementById(hero).style.display = 'grid';
        anotherVisible = true;
        visibleNow = hero;
    }
}
function isAnotherVisible(another, visibleNow) {
    if (another) {
        document.getElementById(visibleNow).style.display = 'none';
    }
}

function turnRed(heroSpan) {
    isAnotherRed(anotherRed, redNow);
    document.getElementById(heroSpan).style.backgroundColor = '#e62429';
    anotherRed = true;
    redNow = heroSpan;
}

function isAnotherRed(anotherRed, redNow) {
    if (anotherRed)
        document.getElementById(redNow).style.backgroundColor = null;
}
window.onload = () => {
    getAdvice()
    chosenHero('hulkSection') 
    turnRed('hulkSpan')
}


const resDiv = document.querySelector('#results');

function getAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
        .then(response => response.json())
        .then(adviceData => {
            const adv = adviceData.slip;
            resDiv.innerHTML = `<p>${adv.advice}</p>`;
            console.log(adv.advice);
        });
}

