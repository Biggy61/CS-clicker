const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeClickButton = document.getElementById("upgradeClickButton")

let numberOfCookies = 0;
let clickIncrease = 1;
// {} - scope

// základ, přidávání čísla
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    // => arrow funkce
    numberOfCookies += clickIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "RP: " + numberOfCookies;
}
//upgrade
upgradeClickButton.onclick = () => {
    if (numberOfCookies >= 50){
        //odectu susenky
        numberOfCookies -= 50;
        counter.innerHTML = "RP: " + numberOfCookies;
        
        //zvednu pocet kliknuti
        clickIncrease ++
    }
}













// specialni fotky za urcite cookies
cookie.onclick = () => {
    numberOfCookies += clickIncrease;
    counter.innerHTML = "RP:" + numberOfCookies;
    
if (numberOfCookies >= 500) {
    counter.innerHTML = "Počet kuldů:" + numberOfCookies;
    cookie.src = "./res/img/cookie25.jpg";
    cookie.innerHTML = cookie.src;
}
if (numberOfCookies < 500) {
    counter.innerHTML = "RP:" + numberOfCookies;
    cookie.src = "./res/img/cookie.jpg";
    cookie.innerHTML = cookie.src;
}

if (numberOfCookies >= 1000) {
    counter.innerHTML = "RP:" + numberOfCookies;
    cookie.src = "./res/img/cookie23.jpg";
    cookie.innerHTML = cookie.src;
}
if (numberOfCookies >= 9) {

    teemo.src = "./res/img/teemo.jpg";
    teemo.innerHTML = teemo.src;
    text.src = "Click for message";
    text.innerHTML = text.src
}
if (numberOfCookies >= 10) {

    teemo.src = "./res/img/transparent.jpg";
    teemo.innerHTML = teemo.src;
}

}
function myFunction() {
    alert("chichichicha")
    }
