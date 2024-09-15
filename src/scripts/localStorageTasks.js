window.onload = () => {
    if (localStorage.getItem('tfdSettings')) {
        localStorage.removeItem('tfdSettings');
    }
    const terminal = document.getElementById('terminal');
    const defaultSettings = {
        consoleBlur: "0",
        backgroundPositionY: "center",
        consoleBgColor: "0,0,0,0.7",
        fontColor: "#ffffff"
    };

    let settings = JSON.parse(localStorage.getItem('conSettings')) || defaultSettings;
    settings = { ...defaultSettings, ...settings };
    localStorage.setItem('conSettings', JSON.stringify(settings));

    const { consoleBlur, consoleBgColor, fontColor } = settings;

    if (consoleBlur > 0) {
        terminal.style.backdropFilter = `blur(${consoleBlur}px)`;
    }
    terminal.style.backgroundColor = `rgba(${consoleBgColor})`;
    terminal.style.color = fontColor;
    document.getElementById('commandInput').style.color = fontColor;

    loadBackgroundImage(settings.backgroundPositionY);
};

function loadBackgroundImage(backgroundPositionY) {
    const savedUrl = localStorage.getItem('backgroundImageUrl');
    const app = document.getElementById('app');
    if (savedUrl) {
        app.style.backgroundImage = `url(${savedUrl})`;
        app.style.backgroundPositionY = backgroundPositionY;
    }
}
