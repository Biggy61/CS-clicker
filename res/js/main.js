const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeClickButton = document.getElementById("upgradeClickButton");
const upgradeAutoClickButton = document.getElementById("upgradeAutoClickButton");

let numberOfCookies = 0;
let clickIncrease = 1;
let autoClickIncrease = 0;
let autoclicker;
let autoclickerPrice = 100;
let clickUpgradePrice = 50;


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
};
//upgrade
upgradeClickButton.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odectu susenky
    numberOfCookies -= clickUpgradePrice;
    counter.innerHTML = "RP: " + numberOfCookies;
    clickUpgradePrice += 50;
    upgradeClickButton.innerText = "Upgrade: " + clickUpgradePrice;

    //zvednu pocet kliknuti
    clickIncrease++;
  }
};
upgradeAutoClickButton.onclick = () => {
  if (numberOfCookies >= 100) {
    //odectu cenu
    numberOfCookies -= autoclickerPrice;
   
    //aktualizuji odstavec
    counter.innerHTML = "RP: " + numberOfCookies;
    autoclickerPrice+=100;
    upgradeAutoClickButton.innerText = "Buy autoclick upgrade: " + autoclickerPrice;
    //zvedne autoclicker hodnotu
    autoClickIncrease++;
    
    //zastaveni intervalu
    clearInterval(autoclicker);
   
    //opakovani po case pro pridani susenky
    //           a
    autoclicker = setInterval(() => {
      numberOfCookies += autoClickIncrease;
      counter.innerHTML = "RP: " + numberOfCookies;
    }, 1000);
    // b
  }
};
/*
const turnOnCheats = () => {
    numberOfCookies += 1000000;
    counter.innerHTML = "RP: " + numberOfCookies;
}

turnOnCheats ();
*/


  //2. verze
 // function turnOnCheats() {
 //   numberOfCookies += 1000000;
 //   counter.innerHTML = "RP: " + numberOfCookies; }
 // turnOnCheats ();

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
    text.innerHTML = text.src;
  }
  if (numberOfCookies >= 10) {
    teemo.src = "./res/img/transparent.jpg";
    teemo.innerHTML = teemo.src;
  }
};
function myFunction() {
  alert("chichichicha");
}
