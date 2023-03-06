let clickMe = document.getElementById("clickMe");
let earn = document.querySelector("#earnCoin");
let fartSound = new Audio("../src/audio/fart.mp3");
let allBuy = document.querySelectorAll(".buy");
let fartCoinStorage = localStorage.getItem("fartCoins");

fartSound.volume = 0.001;
if (!fartCoinStorage) {localStorage.setItem("fartCoins", 0)};
earn.textContent = fartCoinStorage;


for (let i = 0; i < allBuy.length; i++) {
    if (allBuy[i].classList.contains("animeBg")) {
        allBuy[i].onclick = () => {
            if (allBuy[i].classList.contains("animeBg") && fartCoinStorage >= 50) {
                localStorage.setItem("fartCoins", Number(localStorage.getItem("fartCoins")) - 50);
                earn.textContent = Number(earn.textContent - 50)
                document.querySelector("#app").style.background = "url(https://wallpapercave.com/wp/wp2760802.jpg)"
            }
        }
    }
}



clickMe.addEventListener("click", () => {
    localStorage.setItem("fartCoins", Number(localStorage.getItem("fartCoins"))+1);
    earn.textContent = localStorage.getItem("fartCoins");
    fartSound.play();
    fartSound.currentTime = 0;
    if (Number(earn.textContent) === 50) {
        console.log(true)
    }
})

