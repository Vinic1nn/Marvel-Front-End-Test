var anotherVisible = false;
var visibleNow = null;
var redNow = null;

function chosenHero(hero) {
    isAnotherVisible(anotherVisible, visibleNow);
    var display = document.getElementById(hero).style.display;
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

function turnRed(){
    

}

function isAnotherRed(){


}
