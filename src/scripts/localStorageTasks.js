window.onload = () => {
    loadBackgroundImage(); // Load background image from localStorage
    if (!localStorage.getItem('tfdSettings')) {
        localStorage.setItem('tfdSettings', '{"consoleBlur": "0",}');
    }
    //parse settings to json
    const blurValue = JSON.parse(localStorage.getItem('tfdSettings')).consoleBlur;
    if (blurValue > 0) {
        document.getElementById('terminal').style.backdropFilter = `blur(${blurValue}px)`;
    }
}

// load background image
function loadBackgroundImage() {
    const savedUrl = localStorage.getItem('backgroundImageUrl');
    if (savedUrl) {
        document.getElementById('app').style.backgroundImage = `url(${savedUrl})`;
    }
}