const alertEvent = document.getElementById('alertEvent');
const alertEventIco = document.querySelector('.alertEventIco');
const alertEventName = document.querySelector('.alertEventName');
const defaultWallpaper = "https://get.wallhere.com/photo/anime-cartoon-black-hair-hair-mouth-clothing-ecchi-mangaka-interaction-342973.jpg"
const gamePlayBanner = document.getElementById('gamePlayBanner');
const clickerEventContent = document.getElementById('clickerEventContent');

export function alertAndChangeImage(Name = "test", Icon = defaultWallpaper) {
    setTimeout(() => {
        alertEvent.style.opacity = '1';
        alertEvent.style.top = '10px';
        gamePlayBanner.style.backgroundImage = `url("${Icon}")`;
        clickerEventContent.style.backgroundImage = `url("${Icon}")`

        localStorage.setItem('bgImg', Icon)
    }, 1000)
    alertEvent.style.backgroundImage = `url("${Icon}")`;
    alertEventIco.style.backgroundImage = `url("${Icon}")`;
    alertEventName.innerText = Name;
    setTimeout(() => {
        alertEvent.style.opacity = '0';
        alertEvent.style.top = '-90px';
    }, 6000)
}

export function applyYouTubeVideo(videoCode) {
    const youtubeEmbed = 'https://www.youtube.com/embed/';
    let embedCode = videoCode;
    return `<iframe src="${youtubeEmbed + embedCode}?autoplay=1&rel=0&iv_load_policy=3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`
}