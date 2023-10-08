const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeClickButtonWrapper = document.getElementById("upgradeClickButtonWrapper");
const upgradeAutoClickButtonWrapper = document.getElementById("upgradeAutoClickButtonWrapper");

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
  counter.innerHTML = "CS: " + numberOfCookies;
  
};
//upgrade
upgradeClickButtonWrapper.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odectu susenky
    numberOfCookies -= clickUpgradePrice;
    counter.innerHTML = "CS: " + numberOfCookies;
    clickUpgradePrice += 50;
    upgradeClickButton.innerText ="Upgrade: " + clickUpgradePrice;
    
    //zvednu pocet kliknuti
    clickIncrease++;
  }
};
upgradeAutoClickButtonWrapper.onclick = () => {
  if (numberOfCookies >= 100) {
    //odectu cenu
    numberOfCookies -= autoclickerPrice;

    //aktualizuji odstavec
    counter.innerHTML = "CS: " + numberOfCookies;
    autoclickerPrice+=100;
    upgradeAutoClickButton.innerText = "Buy autofarm upgrade: " + autoclickerPrice;
    //zvedne autoclicker hodnotu
    autoClickIncrease++;
    
    //zastaveni intervalu
    clearInterval(autoclicker);
  
    //opakovani po case pro pridani susenky
    //           a
    autoclicker = setInterval(() => {
      numberOfCookies += autoClickIncrease;
      counter.innerHTML = "CS: " + numberOfCookies;
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
  counter.innerHTML = "CS:" + numberOfCookies;

  

  if (numberOfCookies >= 1000000) {
    counter.innerHTML = "CS:" + numberOfCookies;
    cookie.src = "./res/img/cookie23.jpg";
    cookie.innerHTML = cookie.src;
  }
  if (numberOfCookies < 1000000) {
    counter.innerHTML = "CS:" + numberOfCookies;
    cookie.src = "./res/img/cookie.jpg";
    cookie.innerHTML = cookie.src;
  }
  if (numberOfCookies >= 9) {
    teemo.src = "./res/img/teemo.jpg";
    teemo.innerHTML = teemo.src;
    
  }
  if (numberOfCookies >= 10) {
    teemo.src = "./res/img/transparent.jpg";
    teemo.innerHTML = teemo.src;
  }
};


