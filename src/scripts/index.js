import { alertAndChangeImage as alertEvent, applyYouTubeVideo as yt } from "./exports.js";

let fartSound = new Audio("src/audio/fart.mp3")
let fartReversSound = new Audio("src/audio/fartRevers.mp3")
let takeClicker = document.getElementById("clicker");
let countOfFarts = localStorage.getItem("countOfFartsTwo")
let clickerEvent = document.getElementById("clickerEventContent");
const gamePlayBanner = document.getElementById('gamePlayBanner');
const clickerEventContent = document.getElementById('clickerEventContent');
if (!countOfFarts) { 
    localStorage.clear(); localStorage.setItem("countOfFartsTwo", 0);
}
window.onload = () => {
    document.querySelector("#countOfFarts").textContent = localStorage.getItem("countOfFartsTwo");
}

if (!localStorage.getItem("bgImg")) { 
    localStorage.setItem("bgImg", '') 
}  else {
    gamePlayBanner.style.backgroundImage = `url("${localStorage.getItem("bgImg")}")`;
    clickerEventContent.style.backgroundImage = `url("${localStorage.getItem("bgImg")}")`
}

document.querySelector("#countOfFarts").textContent = localStorage.getItem("countOfFarts");

takeClicker.addEventListener("click", () => {
        localStorage.setItem("countOfFartsTwo", Number(localStorage.getItem("countOfFartsTwo"))+1);
        document.querySelector("#countOfFarts").textContent = localStorage.getItem("countOfFartsTwo");
        fartSound.volume = 0.1;
        fartSound.play();
        fartSound.currentTime = 0;
        if (localStorage.getItem("countOfFartsTwo") == 10) {
            clickerEvent.innerHTML = yt('p94QPaI4SxE');
            alertEvent("Papich", 'https://media.tenor.com/iBU7ZHKt8vUAAAAd/papich.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 50) {
            clickerEvent.innerHTML = yt('OaFk8XkgZik')
            alertEvent("Green, Green. What is your problem?", 'https://media.tenor.com/6j-idzU2-nIAAAAd/green-whats-your-problem.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 150) {
            clickerEvent.innerHTML = yt('7ESMxsaV_XE')
            alertEvent("Cool guy from Japan", 'https://media.tenor.com/lY636-v2z7kAAAAC/anime-aesthetic.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 200) {
            clickerEvent.innerHTML = yt('9wFQGpJ0nH8')
            alertEvent("mercedes benz", 'https://media.tenor.com/8lZ0EGyEk1IAAAAC/inugami-korone-holo-live.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 450) {
            clickerEvent.innerHTML = yt('XeXutvfA1Ns')
            alertEvent("Bokita... Soo...", 'https://media.tenor.com/0MFKlvBBMF4AAAAC/%E5%96%9C%E5%A4%9A%E9%83%81%E4%BB%A3-bocchi-the-rock.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 600) {
            clickerEvent.innerHTML = yt('p2pclJ_37Pk')
            alertEvent("MrBeast", 'https://media.tenor.com/IIXy6CqR5l8AAAAC/mrbeast-ytpmv.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 666) {
            clickerEvent.innerHTML = yt('uARGLmeK5K8')
            alertEvent("void", 'https://media.tenor.com/RLmKJ3y7L9IAAAAC/void-shadow-demon.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 777) {
            clickerEvent.innerHTML = yt('B_xbmDG1kAY')
            alertEvent("Yobanu Casino", 'https://media.tenor.com/Tyc6kaeW3VYAAAAd/casino-chips.gif')
        }
        if (localStorage.getItem("countOfFartsTwo") == 1000) {
            clickerEvent.innerHTML = yt('ZS-djTH4eYU')
            alertEvent("Skibidi Toilet.", 'https://media.tenor.com/aKOxLuqZAd8AAAAC/skibidi-toilet.gif')
        }
})
// https://www.youtube.com/watch?v=UBuN03T6KvY