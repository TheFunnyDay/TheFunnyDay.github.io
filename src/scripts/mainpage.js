let fartSound = new Audio("src/audio/fart.mp3")
let fartReversSound = new Audio("src/audio/fartRevers.mp3")
let takeImg = document.querySelector("img");
let countOfFarts = localStorage.getItem("countOfFarts")
if (!countOfFarts) localStorage.setItem("countOfFarts", 0);

document.querySelector("#countOfFarts").textContent = localStorage.getItem("countOfFarts");

takeImg.addEventListener("click", () => {
    if (!takeImg.classList.contains("clicked")) {
        takeImg.classList.add("clicked");
        takeImg.src = "https://i1.sndcdn.com/avatars-eLgTNLpEuTakBnNF-748N0w-t500x500.jpg";
        takeImg.title = "necoarc reference";
        localStorage.setItem("countOfFarts", Number(localStorage.getItem("countOfFarts"))+1);
        document.querySelector("#countOfFarts").textContent = localStorage.getItem("countOfFarts");
        fartSound.volume = 0.1;
        fartSound.play();
        if (countOfFarts <= 50) {
            setTimeout(() => {
                fartReversSound.volume = 0.1;
                fartReversSound.play();
                setTimeout(() => {
                    takeImg.title = "?";
                    takeImg.src = "https://i.ibb.co/4K1H4mr/photo-2022-11-15-18-49-18.jpg";
                },3000);
            },5000);
        } else if (countOfFarts > 50) {
            setTimeout(() => {
                fartReversSound.volume = 0.1;
                fartReversSound.play();
                setTimeout(() => {
                    takeImg.title = "?";
                    takeImg.outerHTML = `<iframe width="1858" height="792" src="https://www.youtube.com/embed/p94QPaI4SxE?autoplay=1" title="neco arc racism moment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    console.log("oh no... yt errors logs");
                },3000);
            },5000);
        }
    }
})
