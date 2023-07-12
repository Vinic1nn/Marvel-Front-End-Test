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

chosenHero('hulkSection') 
turnRed('hulkSpan')